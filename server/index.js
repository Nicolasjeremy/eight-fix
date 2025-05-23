const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DEFAULT_CONDITIONS = {
  temperature: 28,
  lights: 90,
  humidity: 12,
};

let currentConditions = { ...DEFAULT_CONDITIONS };

app.get('/conditions', (req, res) => {
  res.json(currentConditions);
});

app.post('/conditions', (req, res) => {
  const { temperature, lights, humidity } = req.body;
  currentConditions = { temperature, lights, humidity };
  res.json({ message: 'Updated successfully', currentConditions });
});

app.post('/conditions/reset', (req, res) => {
  currentConditions = { ...DEFAULT_CONDITIONS };
  res.json({ message: 'Restored to default', currentConditions });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
