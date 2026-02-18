import mongoose, {Schema, type Document} from "mongoose";

export interface IChat extends Document {
    //chatName: string;
    //isGroupChat: boolean;
    users: mongoose.Types.ObjectId[]; // Array of User IDs
    participants: mongoose.Types.ObjectId[]; // Array of User IDs (same as users, but can be used for group chats)
    latestMessage?: mongoose.Types.ObjectId; // Reference to the latest message in the chat
    latestMessageAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const ChatSchema = new Schema<IChat>({ 
participants: [
    {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
],
// users: [
//     {
//         type:Schema.Types.ObjectId,
//         ref: "User"
//     },
// ],
latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
    default: null,
},
latestMessageAt: {
    type: Date,
    default: Date.now,
},
}, 
    {
    timestamps: true // Automatically manage createdAt and updatedAt fields
    }
);

export const Chat = mongoose.model("Chat", ChatSchema);