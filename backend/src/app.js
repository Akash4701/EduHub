
import express from "express";
import http from 'http';
import { Server } from 'socket.io';
import cors from "cors"
import cookieParser  from "cookie-parser";
import { v2 as cloudinaryV2 } from 'cloudinary';

const app=express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,  
    allowedHeaders: ['Content-Type'],  
  }
});


// Configure Cloudinary
cloudinaryV2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDINARYSECRET,
    secure: true
});

  
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from this origin
  credentials: true,   
  allowedHeaders: ['Content-Type'],               // Enable credentials (cookies)
}));
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())







import  studentRouter from "./routes/student.routes.js"
import notesRouter from "./routes/notes.routes.js"
app.use("/api/v1/students",studentRouter)
app.use("/api/v1/students",notesRouter)
app.use("/api/v1/students",assignmentRouter)
app.use("/api/v1/students",quizzRouter)
app.use("/api/v1/students",studentRouter)
//assignment
import assignmentRouter from "./routes/assignment.routes.js"
import  teacherRouter from "./routes/teacher.routes.js"
import quizzRouter from "./routes/quizz.routes.js"
import { sendQuizMail } from "./controllers/mail.controller.js"
import { getAllStudents } from "./controllers/student.controller.js"
import { sendAssignMail } from "./controllers/assignMail.controller.js"
app.use("/api/v1/teachers",teacherRouter)
app.use("/api/v1/teachers",assignmentRouter)
app.use("/api/v1/teachers",quizzRouter)
// Route for sending mail
app.use("/api/v1/teachers",getAllStudents)
app.use("/api/v1/teachers",sendQuizMail)
 app.use("/api/v1/teachers",sendAssignMail)

 app.post('/convert', async (req, res) => {
    const { videoUrl } = req.body;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Please provide a video URL' });
    }

    try {
        // Upload the video to Cloudinary
        const uploadResult = await cloudinaryV2.uploader.upload(videoUrl, {
            resource_type: 'video'
        });

        // Extract audio from the uploaded video
        const audioUrl = cloudinaryV2.url(uploadResult.public_id, {
            resource_type: 'video',
            format: 'mp3'
        });

        res.json({ audioUrl });
    } catch (error) {
        console.error('Error processing the request:', error.message, error.stack);
        res.status(500).json({ error: 'Error processing the request' });
    }
});

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
  
    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.id);
    });
  
    socket.on('poll-vote', (vote) => {
      io.emit('poll-update', vote);
    });
  
    socket.on('new-question', (question) => {
      io.emit('update-questions', question);
    });
  
    socket.on('draw', (data) => {
      socket.broadcast.emit('drawing', data);
    });
  });

  const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;