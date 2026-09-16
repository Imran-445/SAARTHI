import express from "express";
import cors from "cors";
import schemesRouter from "./routes/schemesRoute.js";
import partnersRouter from "./routes/partnersRoute.js";
import chatbotRouter from "./routes/chatbotRoute.js";

const app = express();

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// API Routes - mounted at both /api/* and /* for compatibility with direct & rewritten serverless routing
app.use(["/api/schemes", "/schemes"], schemesRouter);
app.use(["/api/partners", "/partners"], partnersRouter);
app.use(["/api/chat", "/chat"], chatbotRouter);

// Health check endpoint
app.get(["/api/health", "/health"], (req, res) => {
  res.json({
    status: "ok",
    project: "Saarthi - AI-Driven Scheme Matching for Marginalized Entrepreneurs",
    problemStatement: "26092",
    team: "DigITal Pioneer",
    timestamp: new Date().toISOString()
  });
});

// Root welcome message
app.get("/", (req, res) => {
  res.send("Saarthi Backend API is running. Explore /api/health, /api/schemes, /api/partners, /api/chat.");
});

export default app;
