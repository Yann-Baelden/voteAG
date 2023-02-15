const dataMapper = require("../dataMapper");

const eventController = {
  loginVerif: async (req, res, next) => {
    const request = req.body.email;
    dataMapper.login(request, (err, user) => {
      if (err) {
        console.error("err dans le mainController : ", err);
        return next(err);
      }
      res.status(200).send({ user: user });
    });
  },
};

module.exports = eventController;
