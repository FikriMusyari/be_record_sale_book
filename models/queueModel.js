const pool = require('../config/db');

const Queue = {
  async getAll() {
    const result = await pool.query('SELECT * FROM queue');
    return result.rows;
  },

  async create(customer_id, order_id, queue_number) {
    const result = await pool.query(
      'INSERT INTO queue (customer_id, order_id, queue_number) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, order_id, queue_number]
    );
    return result.rows[0];
  },
};

module.exports = Queue;
