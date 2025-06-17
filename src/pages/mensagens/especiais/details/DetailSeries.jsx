import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seriesData } from './series-data';
import { ChevronDown } from 'lucide-react';
import './detail-series.css';
import '@styles/actions.css';

export function DetailSeries() {
    const { slug } = useParams();
    const series = seriesData.find((s) => s.slug === slug);
    // Estado para controlar quais episódios estão expandidos
    const [expandedEpisodes, setExpandedEpisodes] = useState({});

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
                <header
                className="detalhe-series-header"
                style={{
                    backgroundImage: `url(${series.image || series.backgroundImage})`,
                    backgroundPosition: 'center 20%',
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
                </header>

            <div className="detalhe-series-content">                <ul className="detalhe-series-episodes">
                    {series.episodes.map((episode, index) => (
                        <li key={index} className="detalhe-series-episode-item">
                            <div 
                                className="detalhe-series-episode-header" 
                                onClick={() => setExpandedEpisodes(prev => ({
                                    ...prev,
                                    [index]: !prev[index]
                                }))}
                            >
                                <div className="detalhe-series-episode-header-content">
                                    <span className="detalhe-series-episode-title">{episode.title}</span>
                                    <span className="detalhe-series-episode-date">{episode.date}</span>
                                </div>
                                <div className={`detalhe-series-episode-toggle ${expandedEpisodes[index] ? 'expanded' : ''}`}>
                                    <ChevronDown size={20} color="var(--color-brand-dark-blue)" />
                                </div>
                            </div>
                            
                            <div className={`detalhe-series-episode-content ${expandedEpisodes[index] ? 'expanded' : ''}`}>
                                <p className="detalhe-series-episode-abstract">{episode.abstract}</p>
                                
                                <section className="detalhe-series-episode-references">
                                    <h3>Referências Bíblicas</h3>
                                    <ul>
                                        {episode.references?.map((referencia, idx) => (
                                            <li key={idx}>{referencia}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="detalhe-series-pontos-principais">
                                    <h3>Pontos Principais</h3>
                                    <ul className="detalhe-series-pontos-lista">
                                        {episode.mainPoints?.map((ponto, idx) => (
                                            <li key={idx} className="detalhe-series-ponto">
                                                <h4>{ponto.title}</h4>
                                                <p>{ponto.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="button-actions">
                    <Link to="/series" className="btn">Voltar para séries</Link>
                </div>
            </div>
        </div>
    );
}