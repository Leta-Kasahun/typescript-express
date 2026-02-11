import { productStatus } from "./product.type";
export interface Product{
    readonly id:number;
    name:string;
    price:number;
    status?:productStatus;
    description?:string;
}