const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const Match = require('../models/matchSchema');

// Define your routes here
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/users', async (req, res) => {
    console.log('horse');
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
});

router.get('/matches', async (req, res) => {
    const matches = await Match.find();
    res.json(matches);
});

router.post('/matches', async (req, res) => {
    const newMatch = new Match(req.body);
    await newMatch.save();
    res.json(newMatch);
});

module.exports = router;
