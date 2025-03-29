const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    id: { type: String, unique: true, default: () => uuidv4() },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emiratesId: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
