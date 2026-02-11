import { Product } from "../types/poroduct.interface";
const products:Product[]=[
    {id:1,name:"Laptop",price:54000,status:"available"},
    {id:2,name:"Phone",price:24000,status:"sold out",description:"Iphone Promax smart phone"}
]
export function getProductById(id:number):Product|undefined{
    return products.find(p=>p.id===id);
}

export function buyProduct(id:number):Product|string{
    const p=products.find(pr=>pr.id===id);
    if(!p)return "product not found";
    if(p.status==="sold out")return "producat is already sold";
    p.status="sold out";
    return p;
}