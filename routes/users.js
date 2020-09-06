const {Router} = require('express');
const {readJSONByType} = require('../utils');

const usersRouter = Router();

usersRouter.get('/users', async (req, res, next) => {
  try {
    const users = await readJSONByType('users');
    res.send(users);
  } catch (e) {
    next(e);
  }
});

usersRouter.get('/users/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const users = await readJSONByType('users');
    const user = users.find(user => user._id === id);

    if (!user) {
      res.status(404);
      res.send({message: 'Нет пользователя с таким id'});
      return;
    }

    res.send(user);
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
