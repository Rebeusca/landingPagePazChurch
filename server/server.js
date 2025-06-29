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

// Rotas
try {
    const reCaptchaRoute = require('./routes/verify_reCaptcha');
    app.use('/verify-captcha', reCaptchaRoute);

    const statusRoute = require('./routes/verify_init');
    app.use('/api/status', statusRoute);
        
    const querJesusRoute = require('./routes/forms/quer_jesus');
    app.use('/quer-jesus', querJesusRoute);

    const lifeGroupRoute = require('./routes/forms/life_group_form');
    app.use('/life-group', lifeGroupRoute);

    const voluntarioRoute = require('./routes/forms/voluntario');
    app.use('/voluntario', voluntarioRoute);

    const devocionalRoute = require('./routes/forms/devocional_inscricao');
    app.use('/devocional-inscricao', devocionalRoute);
} catch (error) {
    console.error('Erro ao carregar as rotas:', error);
}

app.get('/diagnostico', (req, res) => {
    try {
        const diagnostico = {
            ambiente: {
                node: process.version,
                sistema: process.platform,
            },
            variaveis: {
                RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY ? 'Configurada' : 'Não configurada',
                PORT: process.env.PORT || '5000 (padrão)',
            },
            rotas: {
                '/verify-captcha': 'Configurada',
                '/quer-jesus': 'Configurada',
                '/life-group': 'Configurada',
                '/voluntario': 'Configurada',
            },
            status: 'OK'
        };
        
        res.json(diagnostico);
    } catch (error) {
        res.status(500).json({ 
            erro: 'Erro ao gerar diagnóstico', 
            mensagem: error.message 
        });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`);
    console.log(`reCAPTCHA Secret Key: ${process.env.RECAPTCHA_SECRET_KEY ? 'Configurada' : 'NÃO CONFIGURADA - ISSO CAUSARÁ ERROS'}`);
});