import { User } from "../types/userData";
export const systemTags:string[]=["production","secure","internal"];
export const activeSession:number[]=[201,202,203];
export const user:User[]=[
    {id:1,name:"Leta",role:"admin",active:true},
    {id:2,name:"Miki",role:"user",active:false},
    {id:3,name:"Sara",role:"user",active:true},
]

export const userSession:[string,number][]=[
    ["Leta",201],
    ["Miki",202],
    ["Sara",203],
]