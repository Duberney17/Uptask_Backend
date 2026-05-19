import { Router } from "express";
import { body } from "express-validator"
import { ProjectController } from "../controller/ProjectController.js";
import { handlerError } from "../middleware/projectError.js";

const router = Router();

router.post("/",
    body("projectName").notEmpty().withMessage("El nombre es requerido"),
    body("description").notEmpty().withMessage("La descripción es requerida"),
    body("clientName").notEmpty().withMessage("El nombre del cliente es requerido"),
    handlerError,
    ProjectController.postProject);
router.get("/", ProjectController.getProjects);


export default router;