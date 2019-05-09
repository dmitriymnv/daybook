const express = require('express');

const {
  journals,
  journalsOffset,
  countJournals
} = require('../common/constants');
const { dbQuery } = require('../models/Error');

const router = express.Router();

router.post('/', ({ body }, res) => {
  const { from, categories, publisher } = body.data;
  if (from == 0) {
    db.query(countJournals(categories, publisher), (err, result) => {
      if (err) {
        dbQuery(res);
      } else {
        let { count } = result[0];
        db.query(journals(categories, publisher), (err, result) => {
          if (err) {
            dbQuery(res);
          } else {
            res.json({ count, result });
          }
        });
      }
    });
  } else {
    db.query(journalsOffset(categories, from, publisher), (err, result) => {
      if (err) {
        dbQuery(res);
      } else {
        res.json({ result });
      }
    });
  }
});

module.exports = router;
