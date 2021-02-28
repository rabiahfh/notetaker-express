const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
router.get('/', (req, res) => {
  const notesJson = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  const notes = JSON.parse(notesJson);
  res.json(notes);
})

router.post('/', (req, res) => {
  const notesJson = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  const notes = JSON.parse(notesJson);
  // Grab information about notes from the request
  const title = req.body.title;
  const text = req.body.text;
  const noteObj = { title: title, text: text };
  notes.push(noteObj)
  // Save it into db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
  res.json(notes);
})

module.exports = router;

