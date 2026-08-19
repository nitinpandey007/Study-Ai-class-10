const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// Serve index.html and other frontend files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Test whether the server is running
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "StudyAI Class 10 V4"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`StudyAI Class 10 V4 is running on port ${PORT}`);
});
