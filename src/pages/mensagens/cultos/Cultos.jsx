import React from 'react';
import { Link } from 'react-router-dom';
import { cultosData } from './details/culto-data';
import './cultos.css';
import '@styles/actions.css';

export function Cultos() {
    return (
        <>
            <header className='cultos-header'>
                <h1 className="cultos-title">NOSSOS CULTOS</h1>
                <p className="cultos-subtitle">
                    Acompanhe os nossos cultos anteriores.
                </p>
            </header>
            
            <main className="cultos-main">
                {cultosData.map((culto, index) => (
                    <article key={index} className="culto-card">
                        <div className="culto-image-container">
                            <img src={culto.backgroundImage} alt={culto.title} className="culto-image" />
                        </div>
                        <div className="culto-info">
                            <h2>{culto.title}</h2>
                            <p className='culto-description'>{culto.abstract}</p>
                            <div className="culto-details">
                                <p><strong>Data:</strong> {culto.date}</p>
                                <p>
                                    <strong>Pastor:</strong>{' '}
                                    <Link to={culto.preacherLink} className="pastor-link">
                                        {culto.preacher}
                                    </Link>
                                </p>
                            </div>
                            <Link to={`/cultos/${culto.slug}`} className="btn">Saiba mais</Link>
                        </div>
                    </article>
                ))}

                <div className="button-actions">
                    <Link to="/" className="btn">Voltar para página inicial</Link>
                </div>
            </main>
        </>
    );
}