import { useState } from 'react';
import './quer-jesus.css';

import { MdClose } from "react-icons/md";

export function QuerJesus({ onClose }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Implementar a lógica de envio do formulário futuramente
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        setSubmitted(true);
    };

    return (
        <div className="quer-jesus-overlay">
            <div className="quer-jesus-form">
                <button className="fechar-form" onClick={onClose}>
                    <MdClose color='var(--color-gray-800)' size={24}/>
                </button>
                {submitted ? (
                    <div className="quer-jesus-success">
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
                            
                            <div className="quer-jesus-checkbox">
                                <input type="checkbox" id="concordo" required />
                                <label htmlFor="concordo">Concordo em receber contato da equipe pastoral</label>
                            </div>
                            <div className="quer-jesus-button-container">
                                <button type="submit" className="quer-jesus-button">Quero seguir a Jesus</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}