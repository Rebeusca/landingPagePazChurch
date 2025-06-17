import React from 'react';
import { Link } from 'react-router-dom';
import './series.css';
import '@styles/actions.css';
import { seriesData } from './details/series-data';

export function Series() {
    return (
        <>
            <header className='series-header'>
                <h1 className="series-title">SERIES ESPECIAIS</h1>
                <p className="series-subtitle">
                    Confira as nossas séries.
                </p>
            </header>
            
            <main className="series-main">
                {seriesData.map((serie, index) => (
                    <article key={index} className="serie-card">
                        <div className="serie-image-container">
                            <img src={serie.image} alt={serie.title} className="serie-image" />
                        </div>
                        <div className="serie-info">
                            <h2>{serie.title}</h2>
                            <p className='serie-description'>{serie.description || `Uma série com ${serie.episodes?.length || 0} episódios`}</p>
                            <Link to={`/series/${serie.slug}`} className="btn">Saiba mais</Link>
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