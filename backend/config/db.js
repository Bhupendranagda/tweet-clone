import mongoose from "mongoose";

//  connect mongodb database in this file
const dataBaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default dataBaseConnection;
