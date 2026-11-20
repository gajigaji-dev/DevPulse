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