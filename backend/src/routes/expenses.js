const { Router } = require("express");
const validateExpense = require("../middleware/validateExpense");
const {
  createExpense,
  getAllExpenses,
  getExpensesByCategory,
  deleteExpense,
} = require("../controllers/expensesController");

const router = Router();

router.post("/", validateExpense, createExpense);

router.get("/", (req, res, next) => {
  if (req.query.category) {
    req.params.category = req.query.category;
    return getExpensesByCategory(req, res, next);
  }
  getAllExpenses(req, res, next);
});

router.delete("/:id", deleteExpense);

module.exports = router;
