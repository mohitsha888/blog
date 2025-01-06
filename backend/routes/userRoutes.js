const express = require('express');
const router = express.Router();

// User controllers (we'll create these next)
const {
    registerUser,
    loginUser,
    getUserProfile
} = require('../controllers/userController');

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getUserProfile);

module.exports = router;