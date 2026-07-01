import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        typeof: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        typeof: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        typeof: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)