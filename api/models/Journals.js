const {
  journals,
  journalsOffset,
  countJournals
} = require('../common/constants');

function queryJournals(body, res) {
  const { from, categories, publishers } = body.data;
  if (from == 0) {
    queryJournalsFirst(categories, publishers, res);
  } else {
    queryJournalsFrom(categories, publishers, from, res);
  }
}

function queryJournalsFirst(categories, publishers, res) {
  db.query(countJournals(categories, publishers), (err, result) => {
    if (err) {
      dbQuery(res);
    } else {
      let { count } = result[0];
      db.query(journals(categories, publishers), (err, result) => {
        if (err) {
          dbQuery(res);
        } else {
          res.json({ count, result });
        }
      });
    }
  });
}

function queryJournalsFrom(categories, publishers, from, res) {
  db.query(journalsOffset(categories, from, publishers), (err, result) => {
    if (err) {
      dbQuery(res);
    } else {
      res.json({ result });
    }
  });
}

module.exports = { queryJournals };
