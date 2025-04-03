import { connect } from "mongoose";

export const connectToDatabase = async () => {
  console.log(process.env.MONGO_CONNECTION_STRING);
  
  await connect(process.env.MONGO_CONNECTION_STRING);
  console.log("database connection established");
};