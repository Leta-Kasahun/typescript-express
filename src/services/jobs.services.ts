import { Employee } from "../types/posts";
export function getEmployeeById(id:number):Employee{
    return {
        id:1,
        name:"Abel",
        role:"backend engineer",
        empType:"full-time",
        salary:"negotialble",
        status:"active"
    }
}