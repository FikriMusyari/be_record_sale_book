const pool = require('../config/db');

const Payment = {
  async getAll() {
    const result = await pool.query('SELECT * FROM payment');
    return result.rows;
  },

  async create(order_id, amount, method) {
    const result = await pool.query(
      'INSERT INTO payment (order_id, amount, method) VALUES ($1, $2, $3) RETURNING *',
      [order_id, amount, method]
    );
    return result.rows[0];
  },
};

module.exports = Payment;
