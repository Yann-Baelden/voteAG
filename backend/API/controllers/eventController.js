const dataMapper = require("../dataMapper");

const eventController = {
  updateOneEvent: async (req, res, next) => {
    const eventId = req.params.id;
    dataMapper.updateOneEvent(eventId, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200);
    });
  },

  displayEvent: async (req, res, next) => {
    let eventId = req.params.id;
    dataMapper.getEvent(eventId, (err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ event: resData });
    });
  },
};

module.exports = eventController;
