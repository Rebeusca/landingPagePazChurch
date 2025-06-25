const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: process.env.EMAIL_PORT || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    /**
     * @param {Object} mailOptions
     * @returns {Promise}
     */
    async enviarEmail(mailOptions) {
        try {
            if (!mailOptions.from) {
                mailOptions.from = `"Igreja da Paz" <${process.env.EMAIL_USER}>`;
            }
            
            if (!mailOptions.to) {
                mailOptions.to = process.env.EMAIL_TO || process.env.EMAIL_USER;
            }
            
            const info = await this.transporter.sendMail(mailOptions);
            return info;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @param {Object} dados
     * @returns {String}
     */
    templateQuerJesus(dados) {
        const { nome, email, telefone, mensagem } = dados;
        
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h2 style="color: #1976d2; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Nova Pessoa Interessada em Conhecer Jesus</h2>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${telefone}</p>
                    <p><strong>Mensagem:</strong> ${mensagem || '(Nenhuma mensagem adicional)'}</p>
                    <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                
                <p style="color: #666; font-size: 0.9em; margin-top: 20px;">Este é um email automático do site da Igreja da Paz. Por favor, entre em contato com esta pessoa o quanto antes.</p>
            </div>
        `;
    }

    /**
     * @param {Object} dados
     * @returns {String}
     */
    templateVoluntario(dados) {
        const { nome, email, telefone, ministerio, mensagem } = dados;
        
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h2 style="color: #43a047; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Novo Voluntário para o Ministério</h2>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${telefone}</p>
                    <p><strong>Ministério de Interesse:</strong> <span style="color: #43a047; font-weight: bold;">${ministerio}</span></p>
                    <p><strong>Mensagem:</strong> ${mensagem || '(Nenhuma mensagem adicional)'}</p>
                    <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                
                <p style="color: #666; font-size: 0.9em; margin-top: 20px;">Este é um email automático do site da Igreja da Paz. Por favor, entre em contato com esta pessoa para integrá-la ao ministério.</p>
            </div>
        `;
    }

    /**
     * @param {Object} dados
     * @returns {String}
     */
    templateLifeGroup(dados) {
        const { nome, email, telefone, mensagem } = dados;
        
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h2 style="color: #ff5722; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Nova Pessoa Interessada em Life Group</h2>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${telefone}</p>
                    <p><strong>Mensagem:</strong> ${mensagem || '(Nenhuma mensagem adicional)'}</p>
                    <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                
                <p style="color: #666; font-size: 0.9em; margin-top: 20px;">Este é um email automático do site da Igreja da Paz. Por favor, entre em contato com esta pessoa para conectá-la a um Life Group adequado.</p>
            </div>
        `;
    }
}

module.exports = new EmailService();
