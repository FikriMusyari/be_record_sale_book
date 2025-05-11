const pool = require('../config/db');

exports.getAllPayments = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payment');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPayment = async (req, res) => {
  const { order_id, amount, payment_date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO payment (order_id, amount, payment_date) VALUES ($1, $2, $3) RETURNING *',
      [order_id, amount, payment_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
