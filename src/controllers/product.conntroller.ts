import { REPLCommand } from "node:repl";
import { getProductById,buyProduct } from "../services/product.services";
import { Response,Request } from "express";
export function getProduct(req:Request,res:Response){
    const rawId:unknown=req.params.id;
    if(typeof rawId!=="string")return res.status(400).json({message:"Invalid ID"});
    const id=Number(rawId);
    if(Number.isNaN(id))return res.status(400).json({message:"Id must be number"});
    const product=getProductById(id);
    if(!product)return res.status(404).json({message:"product is not found"});
    res.json(product);
}

export function buyProductConstroller(req:Request,res:Response){
    const rawId:unknown=req.params.id;
    if(typeof rawId!=="string")return res.status(400).json({message:"Invalid id"});
  const id=Number(rawId);
  if(Number.isNaN(id))return res.status(400).json({message:"ID must be Number"});
const result=buyProduct(id);
if(typeof result==="string")return res.status(403).json({message:result});

res.json(result);
}