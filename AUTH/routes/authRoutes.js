const express = require('express');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/authControllers');
const { protect } = require('../middleware/protect');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser );
router.post('/logout',logoutUser );
router.get('/profile',protect, getUserProfile );

module.exports = router;