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

router.get('/validate-user', async (req, res) => {
    try {
        const { email, mobile } = req.query; // ✅ Use req.query, not req.params
        
        // Check if any unique field already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { mobile }] 
        });

        if (existingUser) {
            return res.status(200).json({message: 'User with provided email or mobile already exists', valid: false});
        }

        return res.status(200).json({ message: 'User does not exist, proceed', valid: true }); // ✅ Correct response
    } catch (error) {
        return res.status(200).json({ message: 'Error 500', valid: false });
        // res.status(500).json({ message: 'Server error', error, valid: false });
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { firstname, lastname, email, emiratesId, mobile } = req.body;
        
        // Check if any unique field already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { mobile }] 
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
