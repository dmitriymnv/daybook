//sql запросы
const journals = (categories, publisher) => {
  if (categories !== undefined) {
    return `SELECT id, title, publisher FROM \`journals\` WHERE \`categories\` = ${categories} ORDER BY \`id\` DESC LIMIT 10`;
  } else if (publisher) {
    const regexpPublisher = JSON.parse(publisher).join('|');
    return `SELECT id, title, publisher 
            FROM \`journals\` 
            WHERE \`publisher\` REGEXP '${regexpPublisher}'
            ORDER BY \`id\` 
            DESC LIMIT 10`;
  } else {
    return 'SELECT id, title, publisher FROM `journals` ORDER BY `id` DESC LIMIT 10';
  }
};

const journalsOffset = (categories, from, publisher) =>
  categories && publisher !== undefined
    ? `${journals(categories, publisher)} OFFSET ${from}`
    : `${journals()} OFFSET ${from}`;

const countJournals = (categories, publisher) => {
  console.log(1111111111, categories, publisher);
  if (categories !== undefined) {
    return `SELECT COUNT(*) count FROM \`journals\` WHERE \`categories\` = ${categories}`;
  } else if (publisher) {
    const regexpPublisher = JSON.parse(publisher).join('|');
    return `SELECT COUNT(*) count FROM \`journals\` WHERE \`publisher\` REGEXP '${regexpPublisher}'`;
  } else {
    return 'SELECT COUNT(*) count FROM `journals`';
  }
};

const createUsers = (email, passwordHash) =>
  `INSERT INTO \`users\`(\`email\`, \`password\`) VALUES ('${email}', '${passwordHash}')`;

module.exports = { journals, journalsOffset, countJournals, createUsers };
