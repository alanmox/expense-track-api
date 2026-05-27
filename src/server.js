require("dotenv").config();

const express = require("express");
const testConnection = require("./testConnection");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Expense Track API" });
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await testConnection();
});
