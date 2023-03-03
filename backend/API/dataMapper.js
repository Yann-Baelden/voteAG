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

  getUserByMail: (userMail, callback) => {
    const sqlQuery = `SELECT * FROM users WHERE email='${userMail}';`;
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      const resJSON = JSON.stringify(res.rows[0]);
      callback(null, resJSON);
    });
  },

  getAllEvents: (callback) => {
    const sqlQuery = "SELECT * FROM events";

    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      const resData = res.rows;
      callback(null, resData);
    });
  },

  updateOneEvent: (id, choice, value, callback) => {
    let subQuery = "";
    switch (choice) {
      case "pour":
        subQuery = "SET nb_voix_pour = nb_voix_pour + 1";
        break;

      case "contre":
        subQuery = "SET nb_voix_contre = nb_voix_contre + 1";
        break;

      default:
        subQuery = "SET nb_abstentions = nb_abstentions + 1";
        break;
    }
    const sqlQuery = `UPDATE events ${subQuery} * ${value} WHERE event_id = ${id} RETURNING event_id;`;
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      } else {
        const resJSON = JSON.stringify(res.rows[0]);
        callback(null, resJSON);
      }
    });
  },

  togglingVote: (toggleVote, eventId, callback) => {
    const sqlQuery = `UPDATE events SET isopen = ${toggleVote} WHERE event_id = ${eventId} RETURNING event_id;`;
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      } else {
        const resJSON = JSON.stringify(res.rows[0]);
        callback(null, resJSON);
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
        const resJSON = JSON.stringify(res.rows[0]);
        callback(null, resJSON);
      }
    });
  },

  getEventUser: (eventId, userId, callback) => {
    const sqlQuery = `SELECT * FROM events_users WHERE event_id = ${eventId} AND user_id = ${userId};`;
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      } else {
        if (res.rows.length == 0) {
          const resJSON = JSON.stringify(res.rows);
          callback(null, resJSON);
        } else {
          const resJSON = JSON.stringify(res.rows[0]);
          callback(null, resJSON);
        }
      }
    });
  },

  updateEventUser: (eventId, userId, callback) => {
    const sqlQuery = `INSERT INTO events_users (event_id, user_id) VALUES (${eventId}, ${userId}) RETURNING id;`;
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error(err);
        return callback(err);
      } else {
        const resJson = JSON.stringify(res.rows[0]);
        console.log("res.rows : ", res.rows);
        callback(null, resJson);
      }
    });
  },

  login: (email, callback) => {
    const sqlQuery = `SELECT * FROM "users" WHERE email='${email}'`;
    console.log(sqlQuery);
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error("err dans le datamapper : ", err);
        return callback(err);
      } else {
        console.log(res.rows[0]);
        const resJson = JSON.stringify(res.rows[0]);
        callback(null, resJson);
      }
    });
  },

  updateUserById: (id, user, callback) => {
    console.log("dans le dataMapper : ", id, user);
    const sqlQuery = `UPDATE users SET nom = '${user.nom}', prenom = '${user.prenom}', email = '${user.email}', nbvoix = '${user.nbvoix}' WHERE user_id=${user.user_id} RETURNING user_id;`;
    console.log(sqlQuery);
    client.query(sqlQuery, (err, res) => {
      if (err) {
        console.error("err dans le datamapper : ", err);
        return callback(err);
      } else {
        const resJson = JSON.stringify(res.rows[0]);
        callback(null, resJson);
      }
    });
  },
};

module.exports = dataMapper;
