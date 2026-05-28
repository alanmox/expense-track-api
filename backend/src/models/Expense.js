const db = require("../db");

const Expense = {
  async create({ amount, category, description }) {
    const [result] = await db.execute(
      "INSERT INTO expenses (amount, category, description) VALUES (?, ?, ?)",
      [amount, category, description]
    );
    return { id: result.insertId, amount, category, description };
  },

  async findAll() {
    const [rows] = await db.execute(
      "SELECT * FROM expenses ORDER BY created_at DESC"
    );
    return rows;
  },

  async findByCategory(category) {
    const [rows] = await db.execute(
      "SELECT * FROM expenses WHERE category = ? ORDER BY created_at DESC",
      [category]
    );
    return rows;
  },

  async delete(id) {
    const [result] = await db.execute(
      "DELETE FROM expenses WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  },
};

module.exports = Expense;
