require("dotenv").config();

const express = require("express");
const testConnection = require("./testConnection");
const expensesRouter = require("./routes/expenses");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.json({ message: "Expense Track API" });
});

app.use("/expenses", expensesRouter);

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await testConnection();
});
