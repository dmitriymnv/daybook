const express = require('express');

// const {
//   journals,
//   journalsOffset,
//   countJournals
// } = require('../common/constants');
const { queryJournals } = require('../models/Journals');

const router = express.Router();

router.post('/', ({ body }, res) => {
  queryJournals(body, res);
});

module.exports = router;
