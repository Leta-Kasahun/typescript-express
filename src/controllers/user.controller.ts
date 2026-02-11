import { Response,Request } from "express";
import { getUser,getActiveSession,getSystemTag,getUserSession,findUserById } from "../services/user.services";

export const systemTagController=(req:Request,res:Response)=>res.json(getSystemTag());
export const activeSessionController=(req:Request,res:Response)=>res.json(getActiveSession());
export const userController=(req:Request,res:Response)=>res.json(getUser());
export const userSessionController=(req:Request,res:Response)=>res.json(getUserSession());
export function findUserByIdController(req:Request,res:Response){
const rawId:unknown=req.params.id;
if(typeof rawId!=="string")return res.status(400).json({message:"Invald Id"});
const id=Number(rawId);
if(Number.isNaN(id))return res.status(400).json({message:"ID must be Number"});
const found=findUserById(id);
if(!found)return res.status(404).json({message:"User not found"});
res.json(found);
}
