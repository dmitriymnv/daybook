const express = require('express');

const { queryJournal } = require('../models/Journal');

const router = express.Router();

router.post('/', ({ body }, res) => {
    queryJournal(body, res);
});

module.exports = router;
