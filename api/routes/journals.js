const express = require('express');

const router = express.Router();

router.post('/', ({ body }, res) => {
  const { to } = body.data;
  if (to == 0) {
    const journalsRequest =
      'SELECT title, id FROM `journals` ORDER BY `id` DESC LIMIT 10';
    const countRequest = 'SELECT COUNT(*) count FROM `journals`';

    db.query(countRequest, (err, result) => {
      if (err) {
        console.warn(err);
        res.statusCode(400).json({
          errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
        });
      } else {
        let { count } = result[0];
        db.query(journalsRequest, (err, result) => {
          if (err) {
            console.warn(err);
            res.statusCode(400).json({
              errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
            });
          } else {
            res.json({ count, result });
          }
        });
      }
    });
  } else {
    const journalsRequest = `SELECT title, id FROM \`journals\` ORDER BY \`id\` DESC LIMIT 10 OFFSET ${to}`;
    db.query(journalsRequest, (err, result) => {
      if (err) {
        res.statusCode(400).json({
          errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
        });
      } else {
        res.json({ result });
      }
    });
  }
});

module.exports = router;
