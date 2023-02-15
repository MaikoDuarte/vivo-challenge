import { Request, Response } from 'express';
import { Bot } from '../models/bot.model';


class BotController {
  async getBots(req: Request, res: Response): Promise<Response> {
    try {
      const bots = await Bot.find({}).select('-__v');
      return res.json(bots);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getBotById(req: Request, res: Response): Promise<Response> {
    try {
      const bot = await Bot.findById(req.params.id).select('-__v');
      if (!bot) {
        return res.status(404).json({ error: 'Bot not found' });
      }
      return res.json(bot);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  

  async createBot(req: Request, res: Response): Promise<Response> {
    try {
      const bot = new Bot(req.body);
      await bot.save();
      return res.json(bot);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  

  async updateBot(req: Request, res: Response): Promise<Response> {
    try {
      const bot = await Bot.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!bot) {
        return res.status(404).json({ error: 'Bot not found' });
      }
      return res.json(bot)
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  

  async deleteBot(req: Request, res: Response): Promise<Response> {
    try {
      const bot = await Bot.findByIdAndDelete(req.params.id);
      if (!bot) {
        return res.status(404).json({ error: 'Bot not found' });
      }
      return res.json(bot);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new BotController();
