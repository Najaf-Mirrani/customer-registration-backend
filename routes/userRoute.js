const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { firstname, lastname, email, emiratesId, mobile } = req.body;
        
        // Check if any unique field already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { emiratesId }, { mobile }] 
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User with email, emiratesId, or mobile already exists' });
        }

        const newUser = new User({ firstname, lastname, email, emiratesId, mobile });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
