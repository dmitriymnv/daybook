const express = require('express');

const signup = require('./signup');

const router = express.Router();

router.post('/emailCheck', ({ body }, req) => {
  const { email } = body.data;
  const emailRequest = `SELECT \`email\` FROM \`users\` WHERE \`email\` = '${email.toLowerCase()}'`;

  db.query(emailRequest, (err, result) => {
    if (err) {
      console.warn(err);
      req.statusCode(400).json({
        errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
      });
    } else {
      if (result[0]) {
        req.json({ email: true });
      } else {
        req.json({ email: false });
      }
    }
  });
});

router.use('/signup', signup);

module.exports = router;
