const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructured

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false },
    comments: String
});

module.exports = recipientSchema;