import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';



const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        // console.log(`//// here it is ${connectionInstance}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}
export default connectDB;