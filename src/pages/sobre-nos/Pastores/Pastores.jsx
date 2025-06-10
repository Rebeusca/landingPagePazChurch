import React from 'react';
import './pastores.css';
import { Link } from 'react-router-dom';
import '@styles/actions.css';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';

const PastorCard = ({ pastor }) => {
    return (
        <article className="pastor-card">
            <header className="pastor-header">
                <h2>{pastor.nome}</h2>
                <p>{pastor.cargo}</p>
            </header>
            <div className="pastor-image">
                <img
                    src={pastor.imagem}
                    alt={`Pastor ${pastor.nome}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.backgroundColor = '#e0e0e0';
                        e.target.style.display = 'flex';
                        e.target.style.justifyContent = 'center';
                        e.target.style.alignItems = 'center';
                        e.target.innerHTML = `<div style="text-align: center; padding: 1rem;">
                            <strong>${pastor.nome}</strong>
                        </div>`;
                    }}
                />
            </div>
            <p className="pastor-description">{pastor.descricao}</p>
            <div className="pastor-verse">
                <FaQuoteRight size={18} className="quote-icon" />
                <p>{pastor.versiculo}</p>
                <span className="verse-reference">📖 {pastor.versiculoReferencia}</span>
            </div>
            <div className="pastor-socials">
                {pastor.socials.facebook && (
                    <a href={pastor.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <AiFillFacebook size={25} className="social-icon" />
                    </a>
                )}
                {pastor.socials.instagram && (
                    <a href={pastor.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <AiFillInstagram size={25} className="social-icon" />
                    </a>
                )}
                {pastor.socials.youtube && (
                    <a href={pastor.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <AiFillYoutube size={25} className="social-icon" />
                    </a>
                )}
            </div>
        </article>
    );
};

export function Pastores() {
    const PastoresData = [
        {
            nome: "Pastor Exemplo 1",
            descricao: "Descrição do Pastor 1.",
            imagem: "./pages/sobre-nos/pastores/pastores-imgs/pastor1.svg",
            versiculo: "Ide por todo o mundo e pregai o evangelho...",
            versiculoReferencia: "Marcos 16:15",
            socials: {
                facebook: "https://www.facebook.com/pazquixeramobim",
                instagram: "https://www.instagram.com/pazquixeramobim/",
                youtube: "https://www.youtube.com/pazquixeramobim"
            }
        },
        {
            nome: "Pastor Exemplo 2",
            descricao: "Descrição do Pastor 2.",
            imagem: "./pages/sobre-nos/pastores/pastores-imgs/pastor2.svg",
            versiculo: "Ide por todo o mundo e pregai o evangelho...",
            versiculoReferencia: "Marcos 16:15",
            socials: {
                facebook: "https://www.facebook.com/pazquixeramobim",
                instagram: "https://www.instagram.com/pazquixeramobim/",
                youtube: "https://www.youtube.com/pazquixeramobim"
            }
        },
    ];

    return (
        <main className="pastores-main">
            <div className="pastores-container">
                <div className="pastores-header">
                    <h1 className="pastores-title">NOSSOS PASTORES</h1>
                    <p className="pastores-description">
                        Liderança com amor e propósito
                    </p>
                </div>
                <div className="pastores-content">
                    <section className="pastores-intro">
                        <p>Nossa equipe pastoral é formada por líderes comprometidos com o Reino de Deus e com o cuidado da igreja. 
                        Cada um traz dons e talentos únicos para o ministério, trabalhando juntos para edificar o corpo de Cristo em Quixeramobim.</p>
                    </section>

                    <div className="pastores-list">
                        {PastoresData.map(pastor => (
                            <PastorCard key={pastor.id} pastor={pastor} />
                        ))}
                    </div>

                    <div className="button-actions">
                        <Link to="/" className="btn">Voltar para página inicial</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}