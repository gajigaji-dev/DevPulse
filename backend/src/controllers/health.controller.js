const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controller');

const getHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello world!',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};