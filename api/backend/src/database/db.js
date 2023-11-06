import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Loading...");

  mongoose
    .connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
