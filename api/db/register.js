const data = require('../db.json');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).send(data);
      break;
    case 'POST':
      const newUser = req.body;
      data.register.push(newUser);
      fs.writeFileSync(
        path.join(__dirname, '../db.json'),
        JSON.stringify(data, null, 2),
      );
      res.status(201).send(newUser);
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
};
