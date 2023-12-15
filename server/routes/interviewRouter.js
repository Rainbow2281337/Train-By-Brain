import { Router } from "express";
import interviewController from "../controllers/interviewController.js";

const router = new Router();

router.post("/", interviewController.create);

router.get("/interviews", interviewController.findAllInterviews);
router.get("/interviews/grade", interviewController.findInterviewsByGrade);
router.get(
  "/interviews/position",
  interviewController.findInterviewsByPosition
);

router.delete("/interviews/:id", interviewController.deleteInterview);

export default router;
