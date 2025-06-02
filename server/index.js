// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Default and current condition values
const DEFAULT_CONDITIONS = {
  temperature: 28,
  lights: 90,
  humidity: 12,
};

let currentConditions = { ...DEFAULT_CONDITIONS };

// Endpoint for ESP to POST data
app.post("/conditions/update", (req, res) => {
  const { temperature, lights, humidity } = req.body;
  if (temperature !== undefined && lights !== undefined && humidity !== undefined) {
    currentConditions = { temperature, lights, humidity };
    return res.json({ message: "Conditions updated", currentConditions });
  } else {
    return res.status(400).json({ message: "Missing parameters" });
  }
});

// Endpoint for frontend to GET current condition
app.get("/conditions", (req, res) => {
  res.json(currentConditions);
});

// Endpoint to reset values to default
app.post("/conditions/reset", (req, res) => {
  currentConditions = { ...DEFAULT_CONDITIONS };
  res.json({ message: "Restored to default", currentConditions });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
