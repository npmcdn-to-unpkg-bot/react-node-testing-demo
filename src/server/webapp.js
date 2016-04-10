const path = require('path');
const express = require('express');
const router = express.Router();

const root = path.join(__dirname, '..', '..');

router.use('/static', express.static(path.join(root, 'static')));
router.get('*', (req, res) => res.sendFile(path.join(root, 'index.html')));

module.exports = router;
