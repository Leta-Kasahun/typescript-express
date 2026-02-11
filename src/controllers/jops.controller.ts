import e, { Request,Response } from "express";
import { getEmployeeById } from "../services/jobs.services";
export function getEmpController(req:Request,res:Response){
   const rawId:unknown=req.params.id;
   if(typeof rawId!=="string"){
    return res.status(400).json({message:"Invalid ID type"});

   }
   const id=Number(rawId);
   if(Number.isNaN(id)){
    return res.status(400).json({message:"ID must be a Number"})
   }
   const employee=getEmployeeById(id);
   res.json(employee);
}