import { Request, Response } from "express";
import Project from "../models/Project.js";

export class ProjectController{

    static async postProject(req: Request, res:  Response){

        const project = new Project(req.body);
        
        try {
            await project.save();
            res.send("Creando proyecto Duberney");
            console.log("Proyecto creado:", project);
        } catch (error) {
            console.error("Error al crear el proyecto:", error);
            res.status(500).send("Error al crear el proyecto");
        }
    }

    static getProjects(req: Request, res: Response){
        res.send("Obteniendo proyectos Duberney");
    }
}

