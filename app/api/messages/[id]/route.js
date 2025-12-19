import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/util/getSessionUser";

export const dynamic='force-dynamic';

// PUT /api/message/:id
export const PUT=async(request,{params})=>{
    try {
        await connectDB();
       
        const resolvedParams = await params;
        const { id } = resolvedParams;
        const sessionUser=await getSessionUser();
        if(!sessionUser || !sessionUser.user){
            return new Response('User IS is required',
        
        {
            status:401,
        })
        }
        const {userId} = sessionUser;
        const message=await Message.findById(id);

        if(!message) return new Response('Message Not Found',{
            status:404});

        //verify ownership 
        if(message.recipient.toString() !== userId){
            return new Response('Unauthorized',{status:401});

        }    

        //Update the message o read/unread on the current status
        message.read=!message.read;
        await message.save();
        return new Response(JSON.stringify(message),{status:200})

    } catch (error) {
        console.log(error);
        return new Response ('Something went wrong',{status:500});
    }
}  


// DELETE  /api/messages/:id
export const DELETE=async(request,{params})=>{
    try {
        await connectDB();
       
        const resolvedParams = await params;
        const { id } = resolvedParams;
        const sessionUser=await getSessionUser();
        if(!sessionUser || !sessionUser.user){
            return new Response('User IS is required',
        
        {
            status:401,
        })
        }
        const {userId} = sessionUser;
        const message=await Message.findById(id);

        if(!message) return new Response('Message Not Found',{
            status:404});

        //verify ownership 
        if(message.recipient.toString() !== userId){
            return new Response('Unauthorized',{status:401});

        }    

       await message.deleteOne();
        return new Response(JSON.stringify('Message Deleted'),{status:200})

    } catch (error) {
        console.log(error);
        return new Response ('Something went wrong',{status:500});
    }
}  