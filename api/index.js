import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app = express()
dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    (console.log('Connected to MongoDB'))
  } catch (error) {
    throw(error);
  }
};

mongoose.connection.on('disconnected', () =>{
    console.log('MongoDB disconnected')
})

mongoose.connection.on('connected', () =>{
    console.log('MongoDB connected')
})
//Middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api.rooms", roomsRoute);


app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend!")
})
