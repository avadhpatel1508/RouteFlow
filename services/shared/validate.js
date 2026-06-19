function validateId(req, res, next) {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid user id' });
  }
  req.userId = id;
  next();
}

module.exports = { validateId };
