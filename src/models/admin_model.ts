import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    firstName: String,
    email: { type: String, require: true },
    role: String,
    lastName: String,
    password: { type: String, require: true }
})

export const AdminModel = model('Admins', adminSchema)