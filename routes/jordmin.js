const post = require('./../models/post');

const express = require('express');
const router = express.Router()

router.post('/create-post', (req, res) => {
    let new_post = new post({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body
    });

    new_post.save();
    res.redirect('/jordmin')
})

router.get('/', (req, res) => {
    res.render('dashboard');
})

module.exports = router;