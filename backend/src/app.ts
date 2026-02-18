import express from 'express'
import authRoutes from "./routes/authRoute";
import userRoutes from "./routes/userRoutes";
import messageRoutes from "./routes/messageRoutes";
import chatRoutes from "./routes/chatRoute";

const app = express();

app.use(express.json()); // parses incoming json requests and puts the parsed data in req.body    

app.get("/test", (req, res) => {
    res.json({status: "success", message: "Hello from the backend!"});
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/chats", chatRoutes);
export default app;