import { Request,Response,NextFunction } from "express";
export function roleGuard(reqRole:"admin"|"user"){
    return(req:Request,res:Response,next:NextFunction)=>{
        const role=req.headers["x-role"];
        if(role!==reqRole)return res.status(403).json({message:"Accesse denied"});
        next();
    }
}