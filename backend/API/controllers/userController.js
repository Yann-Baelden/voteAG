const dataMapper = require("../dataMapper");

const userController = {
  displayAllUsers: async (req, res, next) => {
    dataMapper.getAllUsers((err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      console.log(resData);
      res.status(200).send({ users: resData });
    });
  },
};

module.exports = userController;
