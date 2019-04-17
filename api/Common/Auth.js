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

module.exports = { checkEmail };
