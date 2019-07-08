const express = require('express');

const { JournalImage } = require('../models/Media');

const router = express.Router();

router.get('/journal/:id/:number', ({ params: { id, number } }, res) => {
  JournalImage({ id, number }, res);
});

module.exports = router;
