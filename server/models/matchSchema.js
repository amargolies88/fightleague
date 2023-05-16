const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    p1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    p2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    referee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    p1AvailableTimeIntervals: [{ type: [Date] }],
    p2AvailableTimeIntervals: [{ type: [Date] }],
    refereeAvailableTimeIntervals: [{ type: [Date] }],
    matchingAvailableTimeIntervals: [{ type: [Date] }],
    p1Referees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    p2Referees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    matchingReferees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    p1Score: { type: Number },
    p2Score: { type: Number },
    p1Dispute: { type: String },
    p2Dispute: { type: String },
    p1Comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    p2Comments: { type: String },
    refereeComments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    spectatorComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    victor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    loser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);
