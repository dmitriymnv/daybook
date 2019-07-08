const path = require('path');

function JournalImage({ id, number }, res) {
  res.sendFile(
    path.join(__dirname, `../content/journals/${id}/img/${number}.jpg`)
  );
}

module.exports = { JournalImage };
