
import express from "express";
import connectDB from "./db/index.js";
const app = express()
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Mongo BD connection Failed !!", error);
})

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