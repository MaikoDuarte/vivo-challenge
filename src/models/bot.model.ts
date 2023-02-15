import mongoose from "mongoose";
import { BotDocument } from "../interfaces/bot.interface";
import { v4 as uuidv4 } from "uuid";

const botSchema = new mongoose.Schema({

  name: { type: String, required: true },
  text: { type: String },
});

export const Bot = mongoose.model<BotDocument>("Bot", botSchema);

