const express = require('express');

const {
  journals,
  journalsOffset,
  countJournals
} = require('../common/constants');
const { dbQuery } = require('../models/Error');

const router = express.Router();

router.post('/', ({ body }, res) => {
  const { from, categories } = body.data;
  if (from == 0) {
    db.query(countJournals, (err, result) => {
      if (err) {
        dbQuery(res);
      } else {
        let { count } = result[0];
        console.log(2, count);
        db.query(journals(categories), (err, result) => {
          if (err) {
            dbQuery(res);
          } else {
            console.log(3, result);
            res.json({ count, result });
          }
        });
      }
    });
  } else {
    db.query(journalsOffset(categories, from), (err, result) => {
      if (err) {
        dbQuery(res);
      } else {
        res.json({ result });
      }
    });
  }
});

module.exports = router;
