import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log("data-base is not connected", error);
//             throw error;
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error;
//     }
// }) ()