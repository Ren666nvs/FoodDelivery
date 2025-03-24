import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(process.env.MONGO_CONNECTION_STRING);
  console.log("database connection established");
};