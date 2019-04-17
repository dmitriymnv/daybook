const express = require('express');

const signup = require('./signup');

const router = express.Router();

router.post('/emailCheck', ({ body }, res) => {
  const { email } = body.data;
  const emailRequest = `SELECT \`email\` FROM \`users\` WHERE \`email\` = '${email.toLowerCase()}'`;

  db.query(emailRequest, (err, result) => {
    if (err) {
      console.warn(err);
      res.statusCode(400).json({
        errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
      });
    } else {
      if (result[0]) {
        res.json({ email: true });
      } else {
        res.json({ email: false });
      }
    }
  });
});

router.use('/signup', signup);

module.exports = router;
