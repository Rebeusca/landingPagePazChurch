const express = require('express');
const axios = require('axios');
const emailService = require('../../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { nome, whatsapp, email, horarioPreferido, recaptchaToken } = req.body;

        if (!nome || !whatsapp) {
            return res.status(400).json({ 
                success: false, 
                message: 'Por favor, preencha todos os campos obrigatórios.' 
            });
        }

        const phoneRegex = /^\d{10,11}$/;
        if (!phoneRegex.test(whatsapp)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Formato de número de WhatsApp inválido.' 
            });
        }

        if (recaptchaToken) {
            try {
                const recaptchaResponse = await axios.post(
                    'https://www.google.com/recaptcha/api/siteverify',
                    null,
                    {
                        params: {
                            secret: process.env.RECAPTCHA_SECRET_KEY,
                            response: recaptchaToken
                        }
                    }
                );
                
                if (!recaptchaResponse.data.success) {
                    return res.status(400).json({
                        success: false,
                        message: 'Verificação de segurança falhou. Por favor, tente novamente.'
                    });
                }
            } catch (error) {
                console.error('Erro ao verificar reCAPTCHA:', error);
            }
        }

        // lógica para salvar a inscrição no banco de dados

        const mailOptions = {
            subject: `Nova inscrição para Devocionais: ${nome}`,
            html: templateDevocionalInscricao({nome, whatsapp, email, horarioPreferido})
        };

        await emailService.enviarEmail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Sua inscrição foi realizada com sucesso! Em breve você receberá nosso primeiro devocional.' 
        });
        
    } catch (error) {
        console.error('Erro ao processar inscrição para devocionais:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao processar sua inscrição. Tente novamente mais tarde.' 
        });
    }
});

function templateDevocionalInscricao(data) {
    const { nome, whatsapp, email } = data;

    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4A90E2;">Nova Inscrição para Devocionais</h2>
            <p>Uma nova pessoa se inscreveu para receber os devocionais diários!</p>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
            </div>
            
            <p>Não esqueça de adicionar este contato à lista de envio de devocionais.</p>
        </div>
    `;
}

module.exports = router;
