const pool = require('../config/db');

const ProductOrder = {
  async getAll() {
    const result = await pool.query('SELECT * FROM product_order');
    return result.rows;
  },

  async create(customer_id, product_id, quantity, status_id) {
    const result = await pool.query(
      'INSERT INTO product_order (customer_id, product_id, quantity, status_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [customer_id, product_id, quantity, status_id]
    );
    return result.rows[0];
  },
};

module.exports = ProductOrder;
