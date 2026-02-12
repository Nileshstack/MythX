import mongoose from "mongoose";

type connectionObject={
    isConnected?: number;
}
const connection:connectionObject={};

async function dbConnect():Promise<void>{
  if(connection.isConnected){
    console.log("already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '');
    connection.isConnected=db.connections[0].readyState;
    console.log("connected to db");
  } catch (error) {
    console.log("error connecting to db",error);
    process.exit(1);
  }
}
export default dbConnect;