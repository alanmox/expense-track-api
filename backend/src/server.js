require("dotenv").config();

const express = require("express");
const db = require("./db");
const expensesRouter = require("./routes/expenses");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.json({ message: "Expense Track API is running properly..." });
});

app.use("/expenses", expensesRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  db.connectWithRetry();
});
