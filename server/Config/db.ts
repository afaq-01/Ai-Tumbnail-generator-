import mongoose from "mongoose";

const Connectdb = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;

    if (!mongoUrl) {
      throw new Error("MONGODB_URL is not defined in .env");
    }

    await mongoose.connect(mongoUrl);

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default Connectdb;