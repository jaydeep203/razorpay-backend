import {app, PORT} from "./app.js";
import Razorpay from 'razorpay';
import {connectDB} from './config/database.js';

connectDB();
export const instance = new Razorpay({ 
        key_id: process.env.RAZORPAY_APP_ID, 
        key_secret: process.env.RAZORPAY_SECRETE_KEY 
    });




app.listen(PORT, ()=>console.log(`server is working on ${PORT}`));