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

  updateUser: async (req, res, next) => {
    let userId = req.params.id;
    console.log("req.body : ", req.body);
    let user = req.body;
    console.log("userId : ", userId);
    dataMapper.updateUserById(userId, user, (err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      res.status(200).send(resData);
    });
  },
};

module.exports = userController;
