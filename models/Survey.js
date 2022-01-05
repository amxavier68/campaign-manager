const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructured
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],

    // Question Types:: Closed questions
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);