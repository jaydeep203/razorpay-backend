import mongoose from "mongoose";

export const connectDB =  () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    
    try{
         mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log("mongoDB is connected with ");

    }catch(error)
    {
        console.log(error);
    }
};