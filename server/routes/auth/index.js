const express = require('express');

const signup = require('./signup');
const signin = require('./signin');
const { resUser } = require('../../models/User');

const router = express.Router();

router.post('/emailCheck', ({ body: { data: { email } } }, res) => {
  resUser(email, result => {
    if (result) {
      res.json({
        data: { email }
      });
    } else {
      res.json({
        error: {
          code: 400,
          error_message: 'Электронная почта не найдена',
          error_code: 1
        }
      });
    }
  });
});

router.use('/signup', signup);
router.use('/signin', signin);

module.exports = router;
