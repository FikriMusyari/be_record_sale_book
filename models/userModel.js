const pool = require('../config/db');

const User = {
  async create(username, password) {
    const result = await pool.query(
      'INSERT INTO user (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    return result.rows[0];
  },

  async findByUsername(username) {
    const result = await pool.query(
      'SELECT * FROM user WHERE username = $1',
      [username]
    );
    return result.rows[0];
  },
};

module.exports = User;
