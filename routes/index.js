const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/twitter-auth', require('./twitter-auth/twitter-auth'))
router.use('/facebook-auth', require('./facebook-auth/facebook-auth'))

module.exports = router;