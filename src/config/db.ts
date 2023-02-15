import mongoose from "mongoose";

export const connect = (callback: (error: Error) => void) => {
  mongoose.set('strictQuery', false);
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    return callback(new Error("MONGO_URI environment variable is not defined"));
  }

  mongoose.connect(mongoUri);

  const connection = mongoose.connection;
  connection.on("error", callback);
  connection.once("open", () => {
    console.log("Connected to MongoDB Atlas");
    
  });
};
