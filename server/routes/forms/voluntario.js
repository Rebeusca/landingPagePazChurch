const express = require('express');
const emailService = require('../../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {nome, email, telefone, ministerio, mensagem} = req.body;

        if (!nome || !email || !telefone || !ministerio) {
            return res.status(400).json({ 
                success: false, 
                message: 'Por favor, preencha todos os campos obrigatórios.' 
            });
        }
        
        const mailOptions = {
            subject: `Novo Voluntário: ${nome} - ${ministerio}`,
            html: emailService.templateVoluntario({nome, email, telefone, ministerio, mensagem})
        };

        await emailService.enviarEmail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.' 
        });
        
    } catch (error) {
        console.error('Erro ao processar formulário de voluntário:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar a solicitação. Tente novamente mais tarde.' 
        });
    }
});
 
module.exports = router;
