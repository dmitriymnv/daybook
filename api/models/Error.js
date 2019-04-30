function dbQuery(res) {
  res.statusCode(400).json({
    errors: 'Ошибка с получением данных, пожалуйста попробуйте позже'
  });
}

module.exports = { dbQuery };
