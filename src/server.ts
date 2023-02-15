import express from "express";
import { BotRouter } from "./routes/bot.routes";
import { MessageRouter } from "./routes/message.routes";
import { connect } from "./config/db";

import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/config/config.env` });

const app = express();
const port = process.env.PORT || 5000;

connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
});

app.use(express.json());
app.use("/bots", BotRouter);
app.use("/messages", MessageRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



