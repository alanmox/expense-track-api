function validateExpense(req, res, next) {
  const { amount, category } = req.body;

  if (amount == null || typeof amount !== "number" || isNaN(amount)) {
    return res.status(400).json({ error: "amount must be a number" });
  }

  if (!category || typeof category !== "string" || category.trim().length === 0) {
    return res.status(400).json({ error: "category is required and must be a non-empty string" });
  }

  next();
}

module.exports = validateExpense;
