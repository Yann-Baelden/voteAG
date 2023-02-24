const dataMapper = require("../dataMapper");

const eventController = {
  updateOneEvent: async (req, res, next) => {
    let eventId = req.params.id;
    let choice = req.body.name;
    let value = req.body.nbVoix;
    let toggleVote = req.body.isOpen;
    console.log("toggleVote : ", toggleVote);
    if (choice && value) {
      dataMapper.updateOneEvent(eventId, choice, value, (err, resData) => {
        if (err) {
          console.error(err);
          return next(err);
        }

        res.status(200).send({ datas: resData });
      });
    } else {
      dataMapper.togglingVote(toggleVote, eventId, (err, resData) => {
        if (err) {
          console.error(err);
          return next(err);
        }

        res.status(200).send({ datas: resData });
      });
    }
  },

  displayEvent: async (req, res, next) => {
    let eventId = req.params.id;
    console.log(eventId);
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
