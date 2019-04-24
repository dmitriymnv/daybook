const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function toAuthJSON({ email }) {
  return jwt.sign({ email }, 'privatekey');
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
