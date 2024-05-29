import express from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.route.js'
import feedbackRouter from './routes/feedback.route.js'
import cors from 'cors';



mongoose.connect('mongodb+srv://sagarsharma17102002:Innovision@innovision.ucnavzl.mongodb.net/?retryWrites=true&w=majority&appName=innovision').then(()=>{
    console.log("connect")
}).catch((e)=>{
    console.log(e)
})

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});

app.use('/api/auth', authRouter);
app.use('/api/feed', feedbackRouter);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error"
  res.status(statusCode).json({
    success: false,
    statusCode: 500,
    message
  });
});
