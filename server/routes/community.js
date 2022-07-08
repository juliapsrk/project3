'use strict';

const express = require('express');
const router = express.Router();
const Post = require('./../models/post');

const routeGuard = require('./../middleware/route-guard');

// load all posts sorted by date
router.get('/', (req, res, next) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
