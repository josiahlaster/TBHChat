import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGODB_URI as string);
            console.log("MongoDB connected");

        }   catch (error) {
            console.error("MongoDB connection error:", error);
            process.exit(1);
            // 1 means failure, 0 means success
        }

        
    };