import mongoose from "mongoose";

export interface MessageDocument extends mongoose.Document {

    conversationId: string;
    timestamp: Date;
    from: string;
    to:string;
    text: string;
  }