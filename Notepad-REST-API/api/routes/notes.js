const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Note = require('../models/notes');

router.get('/', (req, res, next) => {
  Note.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        notes: docs.map((doc) => {
          return {
            title: doc.title,
            description: doc.description,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/notes/' + doc._id,
            },
          };
        }),
      };
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
  const note = new Note({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
  });
  note
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created note successfully',
        createdNote: {
          title: result.title,
          description: result.description,
          _id: result._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/notes/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get('/:noteId', (req, res, next) => {
  const id = req.params.noteId;
  Note.findById(id)
    .select('title description _id')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          note: doc,
          request: {
            type: 'GET',
            description: 'Get all notes',
            url: 'http://localhost:3000/notes',
          },
        });
      } else {
        res.status(404).json({ message: 'No valid entry found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:noteId', (req, res, next) => {
  const id = req.params.noteId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Note.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Note updated',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/notes/' + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/:noteId', (req, res, next) => {
  const id = req.params.noteId;
  Note.remove({ _id: id })
    .exec()
    .then((results) => {
      res.status(200).json({
        message: 'Note deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/notes',
          body: { title: 'String', description: 'String' },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
