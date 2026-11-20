const express = require('express'); 
const router = express.Router();
const healthController = require('../controllers/health.controller');

const projectController = require('../controllers/project.controller');

router.get('/health', healthController.getHealth);
router.get('/projects', projectController.getAllProjects);
router.get('/projects/:projectId', projectController.getProject);

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success', 
    message: 'Welcome to the DevPulse API!',
    timestamp: new Date().toISOString(),
    });
});

module.exports = router;