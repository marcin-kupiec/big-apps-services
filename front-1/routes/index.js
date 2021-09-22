const express = require('express');
const router = express.Router();
const getRandomColor = require('../utils.js').getRandomColor;

const color = getRandomColor();

/* GET home page listing. */
router.get('/', (req, res, next) => {
  res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="stylesheets/style.css">
        </head>
        <body style="background-color: ${color}">
        <div>
            <p>Hello.</p>
        </div>
        </body>
    </html>
  `);
});

module.exports = router;
