import mongoose from "mongoose";

export interface IUser extends Documents {
    name: String,
    email: string,
    password: string,
    createdAt: Date,
    updateAt: Date
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model<IUser>('user',UserSchema)