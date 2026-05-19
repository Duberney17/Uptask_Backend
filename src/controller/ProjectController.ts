import { Request, Response } from "express";

export class ProjectController{
    static getProjects(req: Request, res: Response){
        res.send("Obteniendo proyectos Duberney");
    }

    static postProject(req: Request, res:  Response){
        res.send('Se creo ell proyecto, Dubermey');
    }
}

