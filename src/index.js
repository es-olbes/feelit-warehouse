import app from './app.js'
import {SERVER_PORT,  DB_URI_MONGO} from './config.js'
import mongoose from 'mongoose'



app.listen(SERVER_PORT)
console.log('Server running on port:', SERVER_PORT)

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI_MONGO)
        console.log('DB is connected to', DB_URI_MONGO)
    } catch (error) {
        console.error(error)
    }
}

connectDB()

