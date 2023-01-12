import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        min: 8,
    },
    picturePath: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
    friends: String,
    ocupation:
});