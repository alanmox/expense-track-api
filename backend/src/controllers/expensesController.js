const Expense = require("../models/Expense");

async function createExpense(req, res, next) {
  try {
    const { amount, category, description } = req.body;
    const expense = await Expense.create({ amount, category, description });
    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
}

async function getAllExpenses(_req, res, next) {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    next(err);
  }
}

async function getExpensesByCategory(req, res, next) {
  try {
    const expenses = await Expense.findByCategory(req.params.category);
    res.json(expenses);
  } catch (err) {
    next(err);
  }
}

async function deleteExpense(req, res, next) {
  try {
    const deleted = await Expense.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json({ message: "Expense deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { createExpense, getAllExpenses, getExpensesByCategory, deleteExpense };
