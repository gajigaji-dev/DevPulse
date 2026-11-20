const express = require('express'); 
const router = express.Router();
const healthController = require('../controllers/health.controller');

router.get('/health', healthController.getHealth);

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success', 
    message: 'Welcome to the DevPulse API!',
    timestamp: new Date().toISOString(),
    });
});

module.exports = router;