const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
    const {nome, email, telefone, mensagem} = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({ success: false, message: 'Por favor, preencha todos os campos obrigatórios.' });
    }

    await enviarEmail(nome, email, telefone, mensagem, res);
});

async function enviarEmail(nome, email, telefone, mensagem, res) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Configurar os detalhes do email
        const mailOptions = {
            from: `"Igreja da Paz" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Nova Decisão: ${nome}`,
            html: `
                <h2>Nova Pessoa Interessada em Conhecer Jesus</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Mensagem:</strong> ${mensagem || '(Nenhuma mensagem adicional)'}</p>
                <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
            `
        };

        // Enviar o email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Pedido enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ success: false, message: 'Erro ao enviar o pedido. Tente novamente mais tarde.' });
    }
}
 
module.exports = router;