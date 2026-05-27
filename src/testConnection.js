const db = require("./db");

async function testConnection() {
  try {
    const connection = await db.getConnection();
    await connection.ping();
    console.log("Database connected successfully");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
}

module.exports = testConnection;
