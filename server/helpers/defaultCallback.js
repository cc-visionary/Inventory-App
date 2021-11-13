function defaultCallback(res, result, err) {
  if(err) throw(err);
  res.status(200).json(result);
}

module.exports = defaultCallback;