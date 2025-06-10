import React from 'react';
import './especiais.css';

const EspeciaisData = [
    {
        title: "SÉRIE: UM LUGAR À MESA",
        description: "Série especial de Páscoa.",
        image: "./pages/mensagens/especiais/cards-series/card-serie-pascoa.jpg",
        episodes: [
            {
                title: "Episódio 1: O Pão que Satisfaz",
                date: "06/04/2025",
                link: "#"
            },
            {
                title: "Episódio 2: Hosana, o Rei veio até nós",
                date: "13/04/2025",
                link: "#"
            },
            {
                title: "Episódio 3: Luto Transformado em Profunda Alegria",
                date: "22/04/2025",
                link: "#"
            }
        ]
    }
];

export function Especiais() {
    return (
        <>
            <header className="especiais-header">
                <h1 className="especiais-title">MENSAGENS ESPECIAIS</h1>
                <p className="especiais-subtitle">Confira as nossas mensagens de devocional diárias e séries especiais.</p>
            </header>

            <main className="especiais-main">
                <article className="especiais-article">
                    <div className="especiais-content">
                        <h2 className="especiais-series-title">Séries Especiais</h2>
                        <p className="especiais-series-description">
                            Acompanhe nossas séries especiais de mensagens, onde abordamos temas relevantes e edificantes para a sua vida.
                        </p>
                        <ul className="especiais-series-list">
                            {EspeciaisData.map((serie, index) => (
                                <li key={index} className="especiais-series-item">
                                    <img src={serie.image} alt={serie.title} className="especiais-series-image" />
                                    <h3 className="especiais-series-item-title">{serie.title}</h3>
                                    <p className="especiais-series-item-description">{serie.description}</p>
                                    <ul className="especiais-episodes-list">
                                        {serie.episodes.map((episode, epIndex) => (
                                            <li key={epIndex} className="especiais-episode-item">
                                                <span className="especiais-episode-title">{episode.title}</span>
                                                <span className="especiais-episode-date"> - {episode.date}</span>
                                                <a href={episode.link} className="especiais-episode-link">Saiba mais</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </main>
        </>
    );
}