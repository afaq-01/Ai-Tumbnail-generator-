import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import Connectdb from "./Config/db.js";
import AuthRouter from "./routes/AuthRoutes.js";

// Extend express-session types
declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    userId: string;
  }
}

// Validate required env vars early
const requiredEnvVars = ["SESSION_SECRET", "MONGODB_URI"];
for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const isProduction = process.env.NODE_ENV === "production";

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL] : []),
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI as string,
      collectionName: "sessions",
    }),
  })
);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/auth", AuthRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// Port
const port = process.env.PORT || 3000;

// Start server
async function startServer() {
  try {
    await Connectdb();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();