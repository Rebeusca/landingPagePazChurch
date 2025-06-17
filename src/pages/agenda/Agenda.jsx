import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './agenda.css';
import '@styles/actions.css';
import { agendaData, categorias } from './agenda-data';

export function Agenda() {
    const [filtroCategoria, setFiltroCategoria] = useState("all");
    
    const eventosFiltrados = filtroCategoria === "all" 
        ? agendaData
        : agendaData.filter(evento => evento.category === filtroCategoria);
    
    const eventosDestacados = agendaData.filter(evento => evento.isHighlighted);
    const proximosEventos = eventosFiltrados;

    return (
        <>
            <header className='agenda-header'>
                <h1 className="agenda-title">AGENDA</h1>
                <p className="agenda-subtitle">
                    Confira nossos próximos eventos e atividades
                </p>
            </header>
            
            {eventosDestacados.length > 0 && (
                <section className="agenda-destaques">
                    <h2 className="agenda-section-title">Destaques</h2>
                    <div className="agenda-destaques-container">
                        {eventosDestacados.map(evento => (
                            <div className="agenda-destaque-card" key={evento.id}>
                                <div className="agenda-destaque-image-container">
                                    <img 
                                        src={evento.image} 
                                        alt={evento.title} 
                                        className="agenda-destaque-image" 
                                    />
                                    <span className="agenda-destaque-category">{evento.category}</span>
                                </div>
                                <div className="agenda-destaque-info">
                                    <h3 className="agenda-destaque-title">{evento.title}</h3>
                                    <p className="agenda-destaque-date">
                                        <i className="fas fa-clock agenda-icon"></i> {evento.date} às {evento.time}
                                    </p>
                                    <p className="agenda-destaque-location">
                                        <i className="fas fa-map-marker-alt agenda-icon"></i> {evento.location}
                                    </p>
                                    <p className="agenda-destaque-description">{evento.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            
            <main className="agenda-main">
                <div className="agenda-filtros">
                    <h2 className="agenda-section-title">Próximos Eventos</h2>
                    <div className="agenda-categorias">
                        {categorias.map(categoria => (
                            <button 
                                key={categoria.id}
                                className={`agenda-categoria-btn ${filtroCategoria === categoria.id ? 'active' : ''}`}
                                onClick={() => setFiltroCategoria(categoria.id)}
                            >
                                {categoria.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="agenda-eventos">
                    {proximosEventos.length > 0 ? (
                        proximosEventos.map(evento => (
                            <article key={evento.id} className="agenda-evento-card">
                                <div className="agenda-evento-image-container">
                                    <img src={evento.image} alt={evento.title} className="agenda-evento-image" />
                                    <span className="agenda-evento-category">{evento.category}</span>
                                </div>
                                <div className="agenda-evento-info">
                                    <h3 className="agenda-evento-title">{evento.title}</h3>
                                    <p className="agenda-evento-date">
                                        <i className="fas fa-clock agenda-icon"></i> {evento.date} às {evento.time}
                                    </p>
                                    <p className="agenda-evento-location">
                                        <i className="fas fa-map-marker-alt agenda-icon"></i> {evento.location}
                                    </p>
                                    <p className="agenda-evento-description">{evento.description}</p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="agenda-empty-message">
                            Nenhum evento encontrado na categoria selecionada.
                        </div>
                    )}
                </div>

                <div className="button-actions">
                    <Link to="/" className="btn">Voltar para página inicial</Link>
                </div>
            </main>
        </>
    );
}
