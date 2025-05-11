const pool = require('../config/db');

const Status = {
  async getAll() {
    const result = await pool.query('SELECT * FROM status');
    return result.rows;
  },

  async create(name) {
    const result = await pool.query(
      'INSERT INTO status (name) VALUES ($1) RETURNING *',
      [name]
    );
    return result.rows[0];
  },
};

module.exports = Status;
