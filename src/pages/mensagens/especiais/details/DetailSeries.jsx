import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { seriesData } from './series-data';
import './detail-series.css';

export function DetailSeries() {
    const { slug } = useParams();
    const series = seriesData.find(s => s.slug === slug);

    if (!series) {
        return (
            <div className="detalhe-series-container">
                <div className="detalhe-series-content">
                    <h2>Série não encontrada</h2>
                    <p>A série que você está procurando não está disponível.</p>
                    <div className="detalhe-series-actions">
                        <Link to="/series" className="btn btn-secondary">Voltar para séries</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="detalhe-series-container">
                <div
                className="detalhe-series-header"
                style={{
                    backgroundImage: `url(${series.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <h1>{series.title}</h1>
                <p className="detalhe-series-description">{series.description}</p>
                <Link to={series.preacherLink} className="detalhe-series-preacher">
                    {series.preacher}
                </Link>
            </div>

            <div className="detalhe-series-content">
                <h3>Episódios</h3>
                <ul className="detalhe-series-episodes">
                    {series.episodes.map((episode, index) => (
                        <li key={index} className="detalhe-series-episode-item">
                            <span className="detalhe-series-episode-title">{episode.title}</span>
                            <span className="detalhe-series-episode-date"> - {episode.date}</span>
                            <a href={episode.link} className="detalhe-series-episode-link">Saiba mais</a>
                        </li>
                    ))}
                </ul>

                <div className="detalhe-series-actions">
                    <Link to="/series" className="btn btn-secondary">Voltar para séries</Link>
                </div>
            </div>
        </div>
    );
}