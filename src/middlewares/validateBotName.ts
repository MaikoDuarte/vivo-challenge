import { Request, Response, NextFunction } from 'express';
import { Bot } from '../models/bot.model';


export async function validateBotName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const existingBot = await Bot.findOne({ name });
  
    if (existingBot) {
      return res.status(400).json({ error: `Bot with name ${name} already exists.` });
    }
  
    next();
  }