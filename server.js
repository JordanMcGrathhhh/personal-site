const mongoose = require('mongoose');
const post = require('./models/post');
const contact = require('./models/contact');

const dotenv = require('dotenv').config()
const path = require('path');

const jordminRoutes = require('./routes/jordmin');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}));
app.use('/jordmin', jordminRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

mongoose.connect(process.env.MONGO_CONN);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'You fucked up dog'));

app.get('/', async (req, res) => {
    posts = await post.find({});
    res.render('index', { posts: posts });
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.post('/create-contact', (req, res) => {
    const new_contact = new contact({
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        tel: req.body.tel,
        text: req.body.text
    });
    new_contact.save()
    res.redirect('/');
})

app.listen(3000, () => {
    console.log("[*] Server Started [*]");
})