const pool = require('../config/db');

exports.getAllQueue = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM queue');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addToQueue = async (req, res) => {
  const { customer_id, status_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO queue (customer_id, status_id) VALUES ($1, $2) RETURNING *',
      [customer_id, status_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
