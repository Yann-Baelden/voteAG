const dataMapper = require("../dataMapper");

const userController = {
  displayAllUsers: async (req, res, next) => {
    dataMapper.getAllUsers((err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ users: resData });
    });
  },

  displayUser: async (req, res, next) => {
    let userMail = req.params.mail.slice(1);
    dataMapper.getUserByMail(userMail, (err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      res.status(200).send(resData);
    });
  },
};

module.exports = userController;
