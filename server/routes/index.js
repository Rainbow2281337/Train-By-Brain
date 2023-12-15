import { Router } from "express";
import topicRouter from "./topicRouter.js";
import interviewRouter from "./interviewRouter.js";

const router = new Router();

router.use("/topic", topicRouter);
router.use("/interview", interviewRouter);

export default router;
