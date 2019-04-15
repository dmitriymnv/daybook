const express = require('express');
const bcrypt = require('bcrypt');

const { toAuthJSON } = require('../../../models/User');

const router = express.Router();

async function checkEmail(email, resEmail) {
  db.query(
    `SELECT \`email\` FROM \`users\` WHERE \`email\` = '${email.toLowerCase()}'`,
    (err, result) => {
      if (err) {
      } else {
        if (result[0]) {
          resEmail(true);
        } else {
          resEmail(false);
        }
      }
    }
  );
}

router.post('/', ({ body: { data: { email, password } } }, req) => {
  checkEmail(email, resEmail => {
    if (resEmail) {
      req.json({
        status: false,
        error: 'Данная электронная почта уже используется'
      });
    } else {
      const passwordHash = bcrypt.hashSync(password, 10);
      const request = `INSERT INTO \`users\`(\`email\`, \`password\`) VALUES ('${email}', '${passwordHash}')`;

      db.query(request, (err, result) => {
        if (err) {
        } else {
          req.json({
            status: true,
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
