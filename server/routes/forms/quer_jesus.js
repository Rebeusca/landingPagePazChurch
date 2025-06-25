const express = require('express');
const emailService = require('../../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {nome, email, telefone, mensagem} = req.body;

        if (!nome || !email || !telefone) {
            return res.status(400).json({ 
                success: false, 
                message: 'Por favor, preencha todos os campos obrigatórios.' 
            });
        }
        
        const mailOptions = {
            subject: `Nova Decisão: ${nome}`,
            html: emailService.templateQuerJesus({nome, email, telefone, mensagem})
        };

        await emailService.enviarEmail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.' 
        });
        
    } catch (error) {
        console.error('Erro ao processar formulário "Quero Jesus":', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar o pedido. Tente novamente mais tarde.' 
        });
    }
});
 
module.exports = router;