import mongoose from "mongoose";


export interface BotDocument extends mongoose.Document {
    name: string;
    text: string;
  }