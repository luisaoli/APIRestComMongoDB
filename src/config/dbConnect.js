import mongoose from "mongoose";

mongoose.connect("mongodb+srv://luisaoli:Pelopidias12!@cluster0.vi778.mongodb.net/aluraNodeAula");

let db = mongoose.connection;

export default db;
