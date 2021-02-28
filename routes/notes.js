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
  const randomId = Math.floor(Math.random() * 100000);
  const noteObj = { id: randomId, title: title, text: text };
  notes.push(noteObj)
  // Save it into db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
  res.json(notes);
})
// creating delete route
// 1 == 1 // TRUE
// 1 == '1' // TRUE
// 1 === '1' // FALSE
router.delete('/:id', (req, res) => {
  const notesID = req.params.id
  const notesJson = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  const notes = JSON.parse(notesJson);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == notesID) {
      // Remove it from the array
      notes.splice(i, 1);
    }
  }
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
  res.json("successfully deleted");


})

module.exports = router;

