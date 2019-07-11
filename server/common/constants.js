//sql запросы
const journals = (categories, publishers) => {
    if (categories !== undefined) {
        return `SELECT id, title, publisher FROM \`journals\` WHERE \`categories\` = ${categories} ORDER BY \`id\` DESC LIMIT 10`;
    } else if (publishers) {
        const typePublishers = typeof publishers === 'string';
        const regexpPublishers = typePublishers
            ? publishers
            : publishers.join('|');
        return `SELECT id, title, publisher 
            FROM \`journals\` 
            WHERE \`publisher\` REGEXP '${regexpPublishers}'
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

const countJournals = (categories, publishers) => {
    if (categories !== undefined) {
        return `SELECT COUNT(*) count FROM \`journals\` WHERE \`categories\` = ${categories}`;
    } else if (publishers) {
        const typePublishers = typeof publishers === 'string';
        const regexpPublishers = typePublishers
            ? publishers
            : publishers.join('|');
        return `SELECT COUNT(*) count FROM \`journals\` WHERE \`publisher\` REGEXP '${regexpPublishers}'`;
    } else {
        return 'SELECT COUNT(*) count FROM `journals`';
    }
};

const createUsers = (email, passwordHash) =>
    `INSERT INTO \`users\`(\`email\`, \`password\`) VALUES ('${email}', '${passwordHash}')`;

const journal = id => `SELECT content FROM \`journals\` WHERE \`id\` = ${id}`;

module.exports = {
    journals,
    journalsOffset,
    countJournals,
    createUsers,
    journal
};
