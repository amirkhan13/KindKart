import {DB_NAME} from '../constants.js';
import mongoose from 'mongoose';


const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
            tls:true,
            
        });

        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
        
    }
}


export default connectDB;