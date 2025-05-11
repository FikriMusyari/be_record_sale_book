const pool = require('../config/db');

const Customer = {
  async getAll() {
    const result = await pool.query('SELECT * FROM customer');
    return result.rows;
  },

  async create(name, phone, address) {
    const result = await pool.query(
      'INSERT INTO customer (name, phone, address) VALUES ($1, $2, $3) RETURNING *',
      [name, phone, address]
    );
    return result.rows[0];
  },
};

module.exports = Customer;
