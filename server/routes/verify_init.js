const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Rota para verificar se o servidor está funcionando corretamente
router.get('/api/status', (req, res) => {
    res.json({ message: 'API funcionando corretamente' });
});

module.exports = router;