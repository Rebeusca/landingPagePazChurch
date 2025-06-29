import React, { useEffect, useState } from 'react';
import { MdWhatsapp, MdCheckCircle } from 'react-icons/md';
import './devocional.css';

import { executeReCaptcha } from '../../../utils/recaptchaUtils';
import { loadReCaptchaScript } from '../../../utils/recaptchaLoader';
import { validarTelefone, formatarWhatsApp } from '../../../utils/validationUtils';

function Devocional() {
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        email: '',
        horarioPreferido: 'manha',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
        const loadCaptcha = async () => {
            try {
                await loadReCaptchaScript(siteKey);
                setRecaptchaLoaded(true);
                console.log('reCAPTCHA carregado com sucesso');
            } catch (err) {
                console.error('Erro ao carregar reCAPTCHA:', err);
                setError('Não foi possível carregar o sistema de segurança. Tente recarregar a página.');
            }
        };

        loadCaptcha();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);
            setError(null);

            if (!formData.nome || !formData.whatsapp) {
                throw new Error('Por favor, preencha todos os campos obrigatórios.');
            }

            if (!validarTelefone(formData.whatsapp)) {
                throw new Error('Formato de WhatsApp inválido. Use o formato: DDD + número (Ex: 11912345678)');
            }
            
            const whatsappFormatado = formatarWhatsApp(formData.whatsapp);

            const recaptchaResult = await executeReCaptcha('devocional_submit');

            if (!recaptchaResult || !recaptchaResult.token) {
                throw new Error('Falha na verificação de segurança. Tente novamente.');
            }

            const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            console.log('Enviando dados para:', `${baseURL}/devocional-inscricao`);
            const response = await fetch(`${baseURL}/devocional-inscricao`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    whatsapp: formData.whatsapp.replace(/\D/g, ''),
                    whatsappFormatado: whatsappFormatado,
                    recaptchaToken: recaptchaResult.token
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao enviar os dados. Tente novamente mais tarde.');
            }

            setFormData({
                nome: '',
                whatsapp: '',
                email: ''
            });
            
            setSuccess(true);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setError(error.message || 'Ocorreu um erro ao processar sua solicitação. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="devocional-container">
            <div className="devocional-content">
                <div className="devocional-info">
                    <h2>Comece o dia com Esperança e Palavra</h2>
                    <p>
                        Todos os dias, receba uma mensagem para lembrar que Deus está com você.
                        Receba versículos, reflexões e orações que te fortalecem e inspiram para viver com fé.
                    </p>
                    <div className="devocional-example">
                        <h3>Exemplo de devocional:</h3>
                        <div className="message-example">
                            <p><strong>🌞 Bom dia! Devocional de hoje:</strong></p>
                            <p><strong>Versículo:</strong> "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento." Provérbios 3:5</p>
                            <p><strong>Reflexão:</strong> Quantas vezes tentamos resolver tudo com nossa própria força? Hoje, lembre-se de que Deus está no controle. Confie nEle para guiar seus passos.</p>
                            <p><strong>🙏 Oração:</strong> "Senhor, ajuda-me a confiar em Ti mesmo quando não compreendo Teus caminhos. Amém."</p>
                        </div>
                    </div>
                </div>

                <div className="devocional-form-container">
                    {success ? (
                        <div className="success-message">
                            <MdCheckCircle size={60} color="var(--color-primary)" />
                            <h2>Inscrição realizada com sucesso!</h2>
                            <p>Você receberá seu primeiro devocional em breve no WhatsApp informado.</p>
                            <p>Obrigado por se juntar à nossa comunidade de oração e reflexão diária.</p>
                        </div>
                    ) : (
                        <div className="form-wrapper">
                            <h2>Inscreva-se gratuitamente</h2>
                            <p>Preencha o formulário para receber nossos devocionais diários:</p>
                            
                            <form onSubmit={handleSubmit} className="devocional-form">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome completo:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Digite seu nome"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <div className="whatsapp-label">
                                        <MdWhatsapp size={20} color="var(--color-primary)" />
                                        <label htmlFor="whatsapp">WhatsApp:</label>
                                    </div>
                                    <div className="whatsapp-input">
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="Ex: 11912345678 (apenas números)"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">E-mail (opcional):</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Digite seu e-mail (opcional)"
                                    />
                                </div>

                                {error && (
                                    <div className="form-error">
                                        <p>{error}</p>
                                    </div>
                                )}

                                <div className="recaptcha-container">
                                    <div className="recaptcha-disclaimer">
                                        Este site é protegido pelo reCAPTCHA e aplicam-se a 
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Política de Privacidade</a> e 
                                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Termos de Serviço</a> do Google.
                                    </div>
                                </div>

                                <div className="form-button-container">
                                    <button
                                        type="submit"
                                        className="form-button"
                                        disabled={loading || !recaptchaLoaded}
                                    >
                                        {loading ? 'Processando...' : 'Inscrever-me nos devocionais'}
                                    </button>
                                </div>
                                
                                <div className="form-disclaimer">
                                    <p>
                                        Ao se inscrever, você concorda em receber nossas mensagens devocionais. 
                                        Você pode cancelar a qualquer momento respondendo "CANCELAR" ao receber uma mensagem.
                                    </p>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Devocional;
