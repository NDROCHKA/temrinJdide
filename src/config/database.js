import mongoose from "mongoose";

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "IDP";

const connectionString = `mongodb://${DB_HOST}:${DB_PORT}:/${DB_NAME}`;

export const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/baroudDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB connected succsefsfully"))
    .catch((err) => console.log("mongodb has error", err));
};

export default connect;
