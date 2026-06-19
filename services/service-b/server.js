require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { users, getUserById } = require('../shared/users');
const { validateId } = require('../shared/validate');

const app = express();
const SERVICE_NAME = 'service-b';

app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'UP', service: SERVICE_NAME });
});

app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.get('/users/:id', validateId, (req, res) => {
  const user = getUserById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.status(200).json(user);
});

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`${SERVICE_NAME} starting up`);
  console.log(`${SERVICE_NAME} listening on http://localhost:${port}`);
});

module.exports = app;
