const express = require('express');
const process = require('process');
const users = require('./routes/users');
const cards = require('./routes/cards');
const {notFound, internalError} = require('./middlewares/errors');

const PORT = process.env.PORT || 3000;
const ADDRESS = process.env.ADDRESS || '127.0.0.1';

const main = () => {
  try {
    const app = express();
    app.use(express.static(`${__dirname}/public`));
    app.use(users);
    app.use(cards);
    app.use(notFound);
    app.use(internalError);

    const server = app.listen(PORT, ADDRESS);

    const exit = () => {
      try {
        console.log('Stoping server...');
        server.close();
        process.exit(0);
      } catch (e) {
        console.error(e.stack);
        process.exit(1);
      }
    };

    process.on('SIGINT', exit);
    process.on('SIGTERM', exit);

    console.log(`Server started on http://${ADDRESS}:${PORT}`);
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
};

main();
