import { useState, useEffect } from 'react';
import { MdClose } from "react-icons/md";
import '../forms.css';

import { executeReCaptcha } from '../../../../utils/recaptchaUtils';
import { loadReCaptchaScript } from '../../../../utils/recaptchaLoader';

export function LifeGroupForm({ onClose }) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [buttonText, setButtonText] = useState('Quero hospedar um Life Group!');
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    useEffect(() => {
        const loadReCaptcha = async () => {
            try {
                await loadReCaptchaScript();
            } catch (err) {
                console.error('Erro ao carregar reCAPTCHA:', err);
            }
        };

        loadReCaptcha();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);
            setButtonText('Enviando...');
            setError(null);

            if (!formData.nome || !formData.email || !formData.telefone) {
                throw new Error('Por favor, preencha todos os campos obrigatórios.');
            }

            setButtonText('Verificando validação...');
            const recaptchaResult = await executeReCaptcha('submit_form');

            const response = await fetch('http://localhost:5000/life-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: recaptchaResult.token
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados. Tente novamente mais tarde.');
            }

            setFormData({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
            
            setSubmitted(true);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        } finally {
            setLoading(false);
            setButtonText('Quero hospedar um Life Group!');
        }
    };

    return (
        <div className="form-overlay">
            <div className="form">
                <button className="fechar-form" onClick={onClose}>
                    <MdClose color='var(--color-gray-800)' size={24}/>
                </button>
                {submitted ? (
                    <div className="form-success">
                        <h2>Obrigado por sua decisão!</h2>
                        <p>Em breve, nossa equipe pastoral entrará em contato com você.</p>
                    </div>
                ) : (
                    <>
                        <h2>Abra a sua casa para o propósito de Deus</h2>
                        <p>Transforme seu lar em um lugar de comunhão, fé e crescimento espiritual.
                        Junte-se a essa missão e permita que outras pessoas conheçam Jesus através do amor vivido no dia a dia.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    name="nome" 
                                    value={formData.nome} 
                                    onChange={handleChange} 
                                    placeholder='Digite seu nome completo'
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder='Digite seu e-mail'
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefone">Telefone:</label>
                                <input 
                                    type="tel" 
                                    id="telefone" 
                                    name="telefone" 
                                    value={formData.telefone} 
                                    onChange={handleChange} 
                                    placeholder='Digite seu telefone'
                                    pattern="[0-9]{2} [9] [0-9]{4}[0-9]{4}" 
                                    title="Formato: (00) 9 00000000"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem (opcional):</label>
                                <textarea 
                                    id="mensagem" 
                                    name="mensagem" 
                                    value={formData.mensagem} 
                                    onChange={handleChange} 
                                    placeholder="Conte-nos um pouco sobre sua decisão ou dúvidas..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-checkbox">
                                <input type="checkbox" id="concordo" required />
                                <label htmlFor="concordo">Concordo em receber contato da equipe pastoral</label>
                            </div>
                            <div className="recaptcha-terms">
                                Este site é protegido pelo reCAPTCHA e aplicam-se a 
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Política de Privacidade</a> e 
                                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Termos de Serviço</a> do Google.
                            </div>
                            
                            <div className="form-button-container">
                                <button 
                                    type="submit" 
                                    className="form-button"
                                    disabled={loading}
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}