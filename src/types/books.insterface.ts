import { BookStatus } from "./books.types";
export interface Book{
   readonly id:Number;
   title:string;
   author:string;
   status:BookStatus;
   pages?:number;

}