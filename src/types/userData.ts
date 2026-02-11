import { UserRole } from "./userRole.types";

export interface User{
   readonly id:number;
   name:string;
   role:UserRole;
   active:boolean;

}