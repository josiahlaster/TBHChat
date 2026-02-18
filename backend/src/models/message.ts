import mongoose, {Schema, type Document} from "mongoose";

export interface IMessage extends Document {
    text: string;
    sender: mongoose.Types.ObjectId; // Reference to User
    chat: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({ 
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
},
    {
    timestamps: true 
    }
); 

MessageSchema.index({ chat: 1, createdAt: -1 }); // Index for efficient retrieval of messages by chat and creation time

export const Message = mongoose.model("Message", MessageSchema);