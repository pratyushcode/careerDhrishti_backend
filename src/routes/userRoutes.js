const express = require('express');
const router = express.Router();
const { getUserIdByName,getUserById } = require('../controllers/userController');

// GET /api/users
router.get('/', getUserIdByName);
router.get('/:id',getUserById);

module.exports = router;
