import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
    path: "../.env"
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('server is connected')
})

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongoDB")
    
        app.listen(process.env.PORT, () => {
            console.log("Server is rumming to port")
        })
    } catch (error) {
        console.log(error);
    }
}

start();


// app.listen(PORT, () => {
//     console.log("Applistining to port 8080" )
// })