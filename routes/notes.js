const express = require('express');
const fs = require('fs');

const router = express.Router();
router.get('/', (req, res) => {
  const db = fs.readFileSync('../db/db.json');
  res.json(db);
})

module.exports = router;

