const express = require('express'); // expreess -> express 오타 수정
const router = express.Router();
const healthController = require('../controllers/health.controller');

router.get('/health', healthController.getHealth);

module.exports = router;