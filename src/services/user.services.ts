import { User } from "../types/userData";
import { userSession,systemTags,user,activeSession } from "../data/systemData";
export const getSystemTag=():string[]=>systemTags;
export const getActiveSession=():number[]=>activeSession;
export const getUser=():User[]=>user;
export const getUserSession=():[string,number][]=>userSession;
export function findUserById(id:number):User|null{
    const found=user.find(u=>u.id===id);
    return found||null;
}

