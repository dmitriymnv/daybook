const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function toAuthJSON({ subscribers, ...rest }) {
  return jwt.sign(
    {
      subscribers: subscribers === null ? [] : subscribers,
      ...rest
    },
    'privatekey'
  );
}

function isValidPassword(password, passwordHash) {
  return bcrypt.compareSync(password, passwordHash);
}

async function resUser(email, res) {
  db.query(
    `SELECT * FROM \`users\` WHERE \`email\` = '${email.toLowerCase()}'`,
    (err, result) => {
      if (err) {
      } else {
        res(result[0]);
      }
    }
  );
}

module.exports = { toAuthJSON, isValidPassword, resUser };
