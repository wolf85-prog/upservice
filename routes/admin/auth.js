const express = require('express');
const controller = require('../../controllers/admin/auth');
const router = express.Router();

// localhost:5000/api/auth/login
router.post('/admin/login', controller.login);

// localhost:5000/api/auth/register
router.post('/register', controller.register);

module.exports = router;