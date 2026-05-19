import { Router } from "express";
import { ProjectController } from "../controller/ProjectController.js";

const router = Router();

router.get("/", ProjectController.getProjects);
router.post("/", ProjectController.postProject);

export default router;