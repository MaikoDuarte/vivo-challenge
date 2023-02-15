import { Router } from "express";
import MessageController   from "../controllers/message.controller";

const router = Router();
const messageController = MessageController;

router.post("/", messageController.store);

router.get("/:id", messageController.show);

router.get("/", messageController.index);

export const MessageRouter = router;
