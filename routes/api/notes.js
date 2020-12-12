const express = require('express');
const router = express.Router();
// Note Model
const Note = require('../../models/Note');

router.get('/', (req, res) =>{
    Note.find()
        .sort({ date: -1 })
        .them(notes => res.json(notes))
});

router.post('/', (req, res) =>{
    const newNote = new Note({
        name: req.body.name,
        description: req.body.description
    });
    newNote.save().then(note => res.json(note))
});
module.exports = router;