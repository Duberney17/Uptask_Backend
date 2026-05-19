import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


export const handlerError = (req : Request, res: Response, next: NextFunction) =>{
    let errros  = validationResult(req);

    if(!errros.isEmpty()){
        return res.status(400).json({
            errors: errros.array()
        })
    }

    next();
}