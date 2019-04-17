const jwt = require('jsonwebtoken');

function toAuthJSON({ email }) {
  return jwt.sign({ email }, 'privatekey');
}

module.exports = { toAuthJSON };
