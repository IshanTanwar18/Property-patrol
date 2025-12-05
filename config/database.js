import mongoose from 'mongoose';

let connected = false;
const connectDB= async()=>{
    mongoose.set('strictQuery',true);
    //If the Database is already connected , don't connect 
    //again
    if(connected){
        console.log('Mongodb is already connected...');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected=true;
        console.log('Mongodb Connected');
    }
    catch(error){
        console.log(error);
    }
}
export default connectDB;