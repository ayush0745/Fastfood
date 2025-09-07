import express from "express";
import cors from "cors"
import foodRouter from "./routes/foodRoute.js";
import { connectDB } from "./config/db.js";




//app config
const app = express();
const port = 4000;

//middlewares
app.use(cors());
app.use(express.json());

//DB connection
connectDB();

//api endpoints
app.use('/api/food',foodRouter);
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>res.status(200).send("hello world"))
//listener
app.listen(port,()=>console.log(`listening on localhost:${port}`)) 