const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh'; // in a real application, this would be an environmental variable and secured
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};