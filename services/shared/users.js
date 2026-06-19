const users = [
  { id: 1, name: 'Avadh' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Sarah' }
];

function getUserById(id) {
  return users.find(u => u.id === id) || null;
}

module.exports = { users, getUserById };
