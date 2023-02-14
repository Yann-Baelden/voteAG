const dataMapper = require("../dataMapper");

const eventController = {
  loginVerif: async (req, res, next) => {
    console.log("dans le controller 1 : ", req.body);
    dataMapper.login(req, (err, user) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ user: user });
    });
  },
};

module.exports = eventController;
