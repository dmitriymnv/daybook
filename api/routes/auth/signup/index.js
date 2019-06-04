const express = require('express');
const bcrypt = require('bcrypt');

const { toAuthJSON } = require('../../../models/User');
const { resUser } = require('../../../models/User');
const { createUsers } = require('../../../common/constants');

const router = express.Router();

router.post('/', ({ body: { data: { email, password } } }, res) => {
  resUser(email, result => {
    if (result) {
      res.json({
        error: {
          code: 400,
          error_message: 'Данная электронная почта уже используется',
          error_code: 1
        }
      });
    } else {
      const passwordHash = bcrypt.hashSync(password, 10);
      database.query(createUsers(email, passwordHash), (err, result) => {
        if (err) {
        } else {
          res.json({
            data: {
              token: toAuthJSON({ email })
            }
          });
        }
      });
    }
  });
});

module.exports = router;
