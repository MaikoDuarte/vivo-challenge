import { Router } from "express";
import  BotController  from "../controllers/bot.controller";
import { validateBotId } from "../middlewares/validateBotId";
import { validateBotName } from "../middlewares/validateBotName";

const router = Router();
const botController = BotController;

router.get("/", botController.getBots);

router.get("/:id", validateBotId, botController.getBotById);

router.post("/", validateBotName, botController.createBot);

router.put("/:id", validateBotId, botController.updateBot);

router.delete("/:id", validateBotId, botController.deleteBot);

export const BotRouter = router;
