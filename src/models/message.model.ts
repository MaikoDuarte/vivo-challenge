import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { MessageDocument } from "../interfaces/message.interface";

const messageSchema = new mongoose.Schema({

  conversationId: { type: String, default: uuidv4 },
  timestamp: { type: Date, default: Date.now },
  from: { type: String, default: uuidv4, required: true},
  to: { type: String, required: true },
  text: { type: String, required: true },
},{ versionKey: false });

export const Message = mongoose.model<MessageDocument>("Message", messageSchema);

