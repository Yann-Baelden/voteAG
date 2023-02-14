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

  updateOneEvent: (event, callback) => {
    const eventId = event.id;

    const sqlQuery = `UPDATE "events" SET (nb_voix_pour, nb_voix_contre, nb_abstentions) = ($1, $2, $3) WHERE event_id = ${eventId}`;

    const values = [event.votesFor, event.votesAgainst, event.abstentions];

    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
    });
  },

  getEvent: (eventId, callback) => {
    const sqlQuery = `SELECT * FROM "events" WHERE event_id = ${eventId};`;

    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      } else {
        const resJSON = JSON.stringify(res.rows);
        callback(null, resJSON);
      }
    });
  },

  login: (email, callback) => {
    //console.log(email);
    const sqlQuery = `SELECT * FROM "users" WHERE email=${email}`;
    console.log("dans le datamapper 1");
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(err);
        return callback(err);
      } else {
        const resJson = JSON.stringify(res.rows);
        console.log(resJson);
        callback(resJson);
      }
    });
  },
};

module.exports = dataMapper;
