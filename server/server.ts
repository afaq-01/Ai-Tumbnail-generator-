import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import session from "express-session";
import Connectdb from "./Config/db.js";

// Extend express-session types
declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    userId: string;
  }
}

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
    },
  })
);

// Connect to MongoDB
await Connectdb();

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

// Port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});