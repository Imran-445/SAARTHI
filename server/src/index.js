import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Saarthi API] Server listening on port ${PORT}`);
  console.log(`[Saarthi API] Health check: http://localhost:${PORT}/api/health`);
});
