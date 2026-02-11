import { Request,Response } from "express";
import { getBookById,borrowBook,addBook,getBooks,deleteBook } from "../services/books.services";
import { Book } from "../types/books.insterface";

export function getBook(req:Request,res:Response){
    const rawId:unknown=req.params.id;
    if(typeof rawId!=="string")return res.status(400).json({message:"Invalid ID type"});
    const id=Number(rawId);
    if(Number.isNaN(id))return res.status(400).json({message:"ID must be Number"});

    const book=getBookById(id);
    if(!book)return res.status(404).json({message:"Book not found"});
    res.json(book);
}
export function borroBook(req:Request,res:Response){
    const id=Number(req.params.id);
    if(Number.isNaN(id))return res.status(400).json({message:"Invalid ID"});
    const result:unknown=borrowBook(id);
    if(typeof result==="string")return res.status(409).json({message:result});
     res.json(result);

}
export function deleteBookController(req:Request,res:Response){
    const id=Number(req.params.id);
    if(Number.isNaN(id))return res.status(400).json({message:"Id must be number"});
    const result=deleteBook(id);
    if(typeof result==="string") return res.status(409).json({message:result});
    res.status(200).json({message:"book is deleted susccefully"});
}

export function addBookController(req:Request,res:Response){
    const book:unknown=req.body;
    if(typeof book!=="object")return res.status(400).json({message:"Invalid Data"});
    const newBook=addBook(book as Book);
    res.status(201).json(newBook);
    
}

export function getBookController(res:Response){
    return res.status(200).json(getBooks())
}