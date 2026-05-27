const { Router } = require("express");
const Expense = require("../models/Expense");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    if (!amount || !category) {
      return res.status(400).json({ error: "amount and category are required" });
    }
    const expense = await Expense.create({ amount, category, description });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const { category } = _req.query;
    const expenses = category
      ? await Expense.findByCategory(category)
      : await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Expense.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
