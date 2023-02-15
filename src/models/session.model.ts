// import mongoose from "mongoose";
// import { v4 as uuidv4 } from "uuid";
// import { SessionDocument } from "../interfaces/session.interface";


// // Definição do modelo de sessão
// const sessionSchema = new mongoose.Schema({
//   sessionId: { type: String, default: uuidv4 },
//   userId: { type: String, required: true },
//   startTime: { type: Date, default: Date.now },
//   endTime: { type: Date },
// });

// export const Session = mongoose.model<SessionDocument>("Session", sessionSchema);