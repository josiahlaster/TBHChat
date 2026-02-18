import mongoose, {Schema, type Document } from 'mongoose';

export interface IUser extends Document {
    clerId: string;
    name: string;
    email: string;
    //password: string;
    profilePicture: string;
    createdAt: Date;
    updatedAt: Date;

}

const userSchema = new Schema<IUser>({
    clerId: { 
        type: String, 
        required: true, 
        unique: true },
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,

    },
    //password: { 
    //    type: String, 
    //    required: true 
    //},
    profilePicture: { 
        type: String,
        default: "",
    },
    // createdAt: { 
    //     type: Date, 
    //     default: Date.now 
    // },
    // updatedAt: { 
    //     type: Date, 
    //     default: Date.now 
    // }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

export const User = mongoose.model('User', userSchema);

// called as users in the database, mongoose automatically pluralizes the model name to create the collection name.
