import { Router } from "express";
import topicController from "../controllers/topicController.js";

const router = new Router();

router.post("/", topicController.create);

router.get("/topics", topicController.findAllTopics);
router.get("/positions", topicController.findAllPositions);
router.get("/topics/position", topicController.findTopicByPosition);
router.get("/topics/:id", topicController.findTopicById);

router.put("/topics", topicController.updateTopic);
router.delete("/topics/:id", topicController.deleteTopic);

export default router;
