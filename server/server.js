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
app.use('/verify-captcha', require('./routes/verify_reCaptcha'));
app.use('/api/status', require('./routes/verify_init'));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});