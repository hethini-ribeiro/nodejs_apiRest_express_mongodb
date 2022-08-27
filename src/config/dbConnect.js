import mongoose from "mongoose";

mongoose.connect("mongodb+srv://hethini:estudos123@node-cluster.u8ju4er.mongodb.net/estudos-node");

let db = mongoose.connection;
export default db;