const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
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

module.exports = router;