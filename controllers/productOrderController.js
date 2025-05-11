const pool = require('../config/db');

exports.getAllProductOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product_order');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProductOrder = async (req, res) => {
  const { customer_id, product_id, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO product_order (customer_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, product_id, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
