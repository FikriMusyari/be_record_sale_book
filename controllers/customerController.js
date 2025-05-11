const pool = require('../config/db');

exports.getAllCustomers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customer');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCustomer = async (req, res) => {
  const { name, phone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO customer (name, phone) VALUES ($1, $2) RETURNING *',
      [name, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
