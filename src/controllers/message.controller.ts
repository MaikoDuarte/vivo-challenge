import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Message } from '../models/message.model';

class MessageController {
  async store(req: Request, res: Response): Promise<Response> {
    const { conversationId, timestamp, from, to, text } = req.body;



    if (!to) {
      return res.status(400).json({ message: 'to is required' });
    }
    if (!text) {
      return res.status(400).json({ message: 'text is required' });
    }

    const message = await Message.create({
      conversationId,
      timestamp,
      from,
      to,
      text,
    });

    return res.json(message);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const message = await Message.findById(id);

    if (!message) {
      return res.status(400).json({ error: 'Message not found' });
    }

    return res.json(message);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { conversationId } = req.query;

    if (!conversationId) {
      return res.status(400).json({ message: 'conversationId is required' });
    }

    const messages = await Message.find({ conversationId });

    return res.json(messages);
  }
}

export default new MessageController();
