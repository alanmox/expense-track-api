const Expense = require("../models/Expense");

async function createExpense(req, res) {
  const { amount, category, description } = req.body;
  const expense = await Expense.create({ amount, category, description });
  res.status(201).json(expense);
}

async function getAllExpenses(_req, res) {
  const expenses = await Expense.findAll();
  res.json(expenses);
}

async function getExpensesByCategory(req, res) {
  const expenses = await Expense.findByCategory(req.params.category);
  res.json(expenses);
}

async function deleteExpense(req, res) {
  const deleted = await Expense.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Expense not found" });
  }
  res.json({ message: "Expense deleted" });
}

module.exports = { createExpense, getAllExpenses, getExpensesByCategory, deleteExpense };
