import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from 'cors';

config({path:"./etc/secrets/config.env"});

export const app = express();

export const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_APP_ID
    })
});
