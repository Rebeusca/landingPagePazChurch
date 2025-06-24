const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//require('./models');

// Rotas
try {
    const reCaptchaRoute = require('./routes/verify_reCaptcha');
    app.use('/verify-captcha', reCaptchaRoute);

    const statusRoute = require('./routes/verify_init');
    app.use('/api/status', statusRoute);
        
    const querJesusRoute = require('./routes/quer_jesus');
    app.use('/quer-jesus', querJesusRoute);
} catch (error) {
    console.error('Erro ao carregar as rotas:', error);
}

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});