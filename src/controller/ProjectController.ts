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

    static async getProjects(req: Request, res: Response){

        const projects = await Project.find();

        try {
            res.status(200);
            res.json(projects);
            console.log("Proyectos obtenidos:", projects);
        } catch (error) {
            console.error("Error al obtener los proyectos:", error);
            res.status(500).send("Error al obtener los proyectos");
        }
    }
    
    static async getProjectById(req: Request, res: Response){
        const { id } = req.params;
        const project = await Project.findById(id);
        try {
            if(project){
                res.status(200);
                res.json(project);
                console.log("Proyecto obtenido por ID:", project);
            } else {
                res.status(404).send("Proyecto no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener el proyecto por ID:", error);
            res.status(500).send("Error al obtener el proyecto por ID");
        }
    }

    static async updateProject(req: Request, res: Response){
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        try {
            if(updatedProject){
                res.status(200);
                res.json(updatedProject);
                console.log("Proyecto actualizado:", updatedProject);
            } else{
                res.status(404).send("Proyecto no encontrado");
            }
        } catch (error) {
            console.error("Error al actualizar el proyecto:", error);
            res.status(500).send("Error al actualizar el proyecto");
        }
    }

    static async deleteProject(req: Request, res: Response){
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        try {
            if(deletedProject){
                res.status(200);
                res.json(deletedProject);
                console.log("Proyecto eliminado:", deletedProject);
            } else {
                res.status(404).send("Proyecto no encontrado");
            }
        } catch (error) {
            console.error("Error al eliminar el proyecto:", error);
            res.status(500).send("Error al eliminar el proyecto");
        }
    }
}

