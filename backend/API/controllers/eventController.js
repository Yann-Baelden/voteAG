const dataMapper = require("../dataMapper");

const eventController = {
  updateOneEvent: async (req, res, next) => {
    let eventId = req.params.id.slice(1);
    let choice = req.body.name;

    dataMapper.updateOneEvent(eventId, choice, (err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ datas: resData });
    });
  },

  displayEvent: async (req, res, next) => {
    let eventId = req.params.id.slice(1);

    dataMapper.getEvent(eventId, (err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ voteResults: resData });
    });
  },

  displayEvents: async (req, res, next) => {
    dataMapper.getAllEvents((err, resData) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      res.status(200).send({ event: resData });
    });
  },
};

module.exports = eventController;
