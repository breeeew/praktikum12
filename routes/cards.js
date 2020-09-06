const {Router} = require('express');
const {readJSONByType} = require('../utils');

const cardsRouter = Router();

cardsRouter.get('/cards', async (req, res, next) => {
  try {
    const cards = await readJSONByType('cards');
    res.send(cards);
  } catch (e) {
    next(e);
  }
});

module.exports = cardsRouter;
