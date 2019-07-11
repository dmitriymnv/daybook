const { journal } = require('../common/constants');

async function queryJournal(body, res) {
    const { id } = body.data;
    queryDatabase(id, ({ content }) => {
        if (content) {
            res.json({ content });
        }
    });
}

function queryDatabase(id, res) {
    database.query(journal(id), (err, result) => {
        if (err) {
            dbQuery(res);
        } else {
            return res(result[0]);
        }
    });
}

module.exports = { queryJournal };
