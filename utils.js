const fs = require('fs').promises;
const path = require('path');

const PATH_BY_TYPE = {
  users: path.resolve(`${__dirname}/data/users.json`),
  cards: path.resolve(`${__dirname}/data/cards.json`),
};

const readJSONByType = async (type) => {
  const filePath = PATH_BY_TYPE[type];

  if (!filePath) {
    throw new Error(`Неподдерживаемый тип. Доступно: ${Object.keys(PATH_BY_TYPE).join(', ')}`);
  }

  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
};

module.exports = {
  readJSONByType,
};
