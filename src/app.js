import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());



//Routes Import

import userRouter from './routes/user.routes.js';


//Pehle humare kaam app.get se hojaraha tha , bcauz routes and controllers yhi likh rhe the 
// but ab seperate kr diya h  --> to ab middlewares ko lana hoga

//_____Routes Declaration_______

 app.use("/api/v1/users", userRouter);

 


 //NOw   '' /api/v1/users ''  is our prefix
//  ex-> http://localhost:5000/api/v1/users/register







export {app};