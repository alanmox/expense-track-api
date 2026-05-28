const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

async function connectWithRetry() {
  for (;;) {
    try {
      const conn = await pool.getConnection();
      await conn.ping();

      await conn.execute(`
        CREATE TABLE IF NOT EXISTS expenses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          amount DECIMAL(10, 2) NOT NULL,
          category VARCHAR(255) NOT NULL,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      conn.release();
      console.log("Database connected successfully");
      return;
    } catch {
      console.log("Trying to connect to database...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
}

pool.connectWithRetry = connectWithRetry;

module.exports = pool;
