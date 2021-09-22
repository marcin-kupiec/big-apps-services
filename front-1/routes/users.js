const express = require('express');
const router = express.Router();
const getRandomColor = require('../utils.js').getRandomColor;
const usersService = require('../services/users.js');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await usersService.getUsers();
  const usersTmpl = users.map(({name, surname}) => `<li>${name} ${surname}</li>`).join('');

  res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='stylesheets/style.css'>
        </head>
        <body style='background-color: ${getRandomColor()}'>
        <div>
            <p>Users.</p>
            <ul>
                ${usersTmpl}
            </ul>
        </div>
        </body>
    </html>
  `);
});

module.exports = router;
