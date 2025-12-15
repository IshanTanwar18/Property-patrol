import {getServerSession} from 'next-auth/next';
import { authOptions } from "@/util/authOptions";

export const getSessionUser=async()=>{
    try {
       const session = await getServerSession(authOptions);
    if(!session || !session.user){
        return null;
    }

    return{
        user:session.user,
        userId:session.user.id
    }; 
    } catch (error) {
        console.lg(error);
        return null
    }
    
};