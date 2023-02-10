const client = require("./database");

const dataMapper = {
  getAllUsers: (callback) => {
    const orderBy = "ORDER BY user_id";

    const sqlQuery = `SELECT * FROM "users" ${orderBy}`;

    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      const resJSON = JSON.stringify(res.rows);
      callback(null, resJSON);
    });
  },
};

module.exports = dataMapper;
