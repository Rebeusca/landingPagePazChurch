const express = require('express');
const emailService = require('../../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {nome, email, telefone, mensagem} = req.body;

        // Validação dos dados
        if (!nome || !email || !telefone) {
            return res.status(400).json({ 
                success: false, 
                message: 'Por favor, preencha todos os campos obrigatórios.' 
            });
        }
        
        const mailOptions = {
            subject: `Interesse em Life Group: ${nome}`,
            html: emailService.templateLifeGroup({nome, email, telefone, mensagem})
        };

        await emailService.enviarEmail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.' 
        });
        
    } catch (error) {
        console.error('Erro ao processar formulário de Life Group:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar a solicitação. Tente novamente mais tarde.' 
        });
    }
});
 
module.exports = router;