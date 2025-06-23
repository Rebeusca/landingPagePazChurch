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

// Rotas reCaptcha
app.post('/verify-captcha', async (req, res) => {
    const { token } = req.body;

    // Validação básica do token
    if (!token) {
        return res.status(400).json({ success: false, message: 'Token de reCAPTCHA não fornecido.' });
    }
        
    // Usar a chave secreta do ambiente ou a chave fixa como fallback
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
            params: {
                secret: secretKey,
                response: token
            }
        });

        if (response.data.success) {
            // Verificar se o score está em um nível aceitável (0.5 ou maior)
            const score = response.data.score || 0;
            
            if (score >= 0.5) {
                return res.json({ 
                    success: true, 
                    message: 'reCAPTCHA verificado com sucesso.',
                    score: score
                });
            } else {
                return res.status(403).json({ 
                    success: false, 
                    message: 'Score de reCAPTCHA muito baixo.',
                    score: score
                });
            }
        }
        
        return res.status(400).json({ 
            success: false, 
            message: 'Falha na verificação do reCAPTCHA.'
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: 'Erro interno do servidor.'
        });
    }
});

// Rota para verificação do servidor
app.get('/api/status', (req, res) => {
    res.json({ message: 'API funcionando corretamente' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});