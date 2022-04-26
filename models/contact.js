const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    text: String,
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    }
});

module.exports = mongoose.model('contact', contactSchema);