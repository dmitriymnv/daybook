//sql запросы
const journals = categories =>
  categories !== undefined
    ? `SELECT id, title, publisher FROM \`journals\` WHERE \`categories\` = ${categories} ORDER BY \`id\` DESC LIMIT 10`
    : 'SELECT id, title, publisher FROM `journals` ORDER BY `id` DESC LIMIT 10';

const journalsOffset = (categories, from) =>
  categories !== undefined
    ? `${journals(categories)} OFFSET ${from}`
    : `${journals()} OFFSET ${from}`;

const countJournals = categories =>
  categories !== undefined
    ? `SELECT COUNT(*) count FROM \`journals\` WHERE \`categories\` = ${categories}`
    : 'SELECT COUNT(*) count FROM `journals`';

module.exports = { journals, journalsOffset, countJournals };
