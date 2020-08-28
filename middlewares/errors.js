const notFound = (req, res, next) => {
  res.status(404).send({
    message: 'Запрашиваемый ресурс не найден',
  });
  next();
};

const internalError = (err, req, res, next) => {
  res.status(500);
  console.error(err.stack || err);
  res.send({
    message: 'Внутренняя ошибка сервера',
  });
  next();
};

module.exports = {
  notFound,
  internalError,
};
