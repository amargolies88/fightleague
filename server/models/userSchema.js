const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    bio: { type: String },
    favoriteCharacters: [{ type: String }],
    seasonWins: { type: Number },
    seasonLosses: { type: Number },
    playoffWins: { type: Number },
    playoffLosses: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
