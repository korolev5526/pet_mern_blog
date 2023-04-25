import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

const app = express();
dotenv.config();

//Constants 
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: 'All is fine'})
})

async function start() {
    try {
        await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/${DB_NAME}?authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch(error) {
        console.log(error)
    }
}
// app.listen(5000, () => {
//     console.log('Server started')
// })
start();