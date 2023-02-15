import { Request, Response, NextFunction } from 'express';

import mongoose from "mongoose";

export function validateBotId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Bot id' });
    }
    next();
  }

  