import mongoose, { Mongoose } from 'mongoose';

mongoose.set('strictQuery', false);

let conn: Promise<Mongoose> | null = null;

async function connectDB(): Promise<Mongoose> {
    try {
        if (!conn) {
            conn = mongoose.connect(process.env.DB_URL as string, {
                bufferCommands: false, // Set this to false to prevent buffering
            });
        }
        console.log('db connected')
        return conn;
    } catch (error) {
        throw new Error("db not connected")
    }

}

export default connectDB;