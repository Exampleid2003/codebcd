import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
     try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! db host: ${connectionInstance.connection.host}`);

        return connectionInstance; //resolve
     } catch (error) {
        console.log("mongodb connection failed", error);
        throw error;//promise reject
     }
}

export default connectDB