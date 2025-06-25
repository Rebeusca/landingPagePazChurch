import { useState, useEffect } from 'react';
import '../forms.css';
import { executeReCaptcha } from '../../../../utils/recaptchaUtils';
import { loadReCaptchaScript } from '../../../../utils/recaptchaLoader';

import { MdClose } from "react-icons/md";

export function QuerJesus({ onClose }) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [buttonText, setButtonText] = useState('Quero conhecer Jesus!');
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
            setButtonText('Enviando...');
            setError(null);

            if (!formData.nome || !formData.email || !formData.telefone) {
                throw new Error('Por favor, preencha todos os campos obrigatórios.');
            }

            setButtonText('Verificando validação...');
            const recaptchaResult = await executeReCaptcha('submit_form');

            if (!recaptchaResult || !recaptchaResult.token) {
                throw new Error('Falha na verificação do reCAPTCHA. Tente novamente.');
            }

            const response = await fetch('http://localhost:5000/quer-jesus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
            setButtonText('Quero seguir a Jesus!');
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
                        <h2>Um novo começo...</h2>
                        <p>Este é um espaço para quem deseja dar o primeiro passo em direção a uma nova jornada. Conhecer Jesus é descobrir um caminho de paz, propósito e transformação.  
                        Se você deseja iniciar essa caminhada com Ele, preencha seus dados. Alguém da nossa equipe entrará em contato para te acompanhar nesse momento tão especial.
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