const pool = require('../config/db');

const Product = {
  async getAll() {
    const result = await pool.query('SELECT * FROM product');
    return result.rows;
  },

  async create(name, description, price) {
    const result = await pool.query(
      'INSERT INTO product (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    return result.rows[0];
  },
};

module.exports = Product;
