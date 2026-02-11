import { EmployType,Salary,AccountStatus } from "./contracts"
export interface Employee{
    id:number;
    name:string;
    role:"backend engineer";
    empType:EmployType;
    salary:Salary;
    status:AccountStatus;
}