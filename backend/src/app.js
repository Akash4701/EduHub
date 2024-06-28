import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser";
const app=express();


app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin
    credentials: true,                // Enable credentials (cookies)
}));
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())







import  studentRouter from "./routes/student.routes.js"



app.use("/api/v1/students",studentRouter)
//assignment

import  teacherRouter from "./routes/teacher.routes.js"

app.use("/api/v1/teachers",teacherRouter)


export default app;