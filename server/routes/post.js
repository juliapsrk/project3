'use strict';

const express = require('express');
const router = express.Router();
const Post = require('./../models/post');

const routeGuard = require('./../middleware/route-guard');

// load latest post sorted and limited
router.get('/list/latest', (req, res, next) => {
  Post.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      next(error);
    });
});

// load all posts by user
router.get('/list/:id', (req, res, next) => {
  const owner = req.user._id;
  Post.find(owner)
    .sort({ createdAt: -1 })
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      next(error);
    });
});

// find and load single post
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Post.findById(id)
    .populate('owner')
    .then((post) => {
      res.json({ post });
    })
    .catch((error) => {
      next(error);
    });
});

// delete a post
router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

// edit a post
router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const { title, description, type } = req.body;
  const owner = req.user._id;
  Post.findByIdAndUpdate(
    { _id: id, owner },
    { title, description, type },
    { new: true }
  )
    .then((post) => {
      res.json({ post });
    })
    .catch((error) => {
      next(error);
    });
});

// create a single post
router.post('/', routeGuard, (req, res, next) => {
  const { title, description, type } = req.body;
  const owner = req.user._id;
  Post.create({ title, description, type, owner })
    .then((post) => {
      res.json({ post });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
