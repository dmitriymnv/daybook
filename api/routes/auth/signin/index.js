const express = require('express');

const {
  resUser,
  isValidPassword,
  toAuthJSON
} = require('../../../models/User');

const router = express.Router();

router.post('/', ({ body: { data: { email, password } } }, res) => {
  resUser(email, result => {
    if (result) {
      const validPassword = isValidPassword(password, result['password']);
      if (validPassword) {
        res.json({
          data: {
            token: toAuthJSON({ email })
          }
        });
      } else {
        res.json({
          error: {
            code: 400,
            error_message: 'Пароль введён не верно',
            error_code: 2
          }
        });
      }
    }
  });
});

module.exports = router;
