import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@styles/aside/aside-card-events.css';
import '@styles/aside/aside-card-forms.css';
import { agendaData } from '../../pages/agenda/agenda-data'
import { AiOutlineHeart, AiOutlineMessage, AiOutlineTeam, AiOutlinePlusCircle, AiOutlineGift, AiOutlineCalendar, AiOutlineEnvironment, AiOutlineClockCircle, AiOutlineHeatMap } from 'react-icons/ai';

export default function Aside({ setFormQueroJesusVisivel, setFormLifeGroupVisivel, setFormVoluntarioVisivel }) {
    const [eventoAtual, setEventoAtual] = useState(0);
    const listaEventos = agendaData.filter(evento => evento.isHighlighted);
    
    // Efeito para alternar entre os eventos a cada segundo
    useEffect(() => {
        if (listaEventos.length > 0) {
            const intervalo = setInterval(() => {
                setEventoAtual(atual => (atual + 1) % listaEventos.length);
            }, 3000);
            
            return () => clearInterval(intervalo);
        }
    }, [listaEventos.length]);
    
    return (
        <aside className='aside-container'>
            <div className='aside-content'>
                {/* Seção de Eventos Próximos */}
                <section className='events-section'>
                    <div className='events-card-content'>
                        <h2 className='events-card-title'>Próximos Eventos</h2>
                        
                        {listaEventos.length > 0 ? (
                            <>
                                {/* Exibe apenas o evento atual no carrossel */}
                                <div className="event-carousel">
                                    {listaEventos.map((evento, index) => (
                                        <div 
                                            key={evento.id}
                                            className={`event-item ${index === eventoAtual ? 'active' : ''}`}
                                        >
                                            <h3 className="event-title">{evento.title}</h3>
                                            <div className="event-info">
                                                <div className="event-detail">
                                                    <AiOutlineCalendar className="event-icon" />
                                                    <span>{evento.date}</span>
                                                </div>
                                                <div className="event-detail">
                                                    <AiOutlineEnvironment className="event-icon" />
                                                    <span>{evento.location}</span>
                                                </div>
                                                <p className="event-description">{evento.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="event-button">
                                    <Link to="/agenda" className='event-btn'>Agenda</Link>
                                </div>
                                
                                {/* Indicadores de navegação - pontinhos */}
                                <div className="event-indicators">
                                    {listaEventos.map((_, index) => (
                                        <span 
                                            key={index}
                                            className={`indicator ${index === eventoAtual ? 'active' : ''}`}
                                            onClick={() => setEventoAtual(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="no-events">
                                <p>Não há eventos próximos no momento</p>
                                <p className="check-later">Volte mais tarde para novidades!</p>
                            </div>
                        )}
                    </div>
                </section>
                
                <section>
                    <div className="envolvase-container aside-column-item">
                        <h2 className="envolvase-title">Envolva-se</h2>
                        <p className="envolvase-subtitle">nesse propósito: <span className="highlight">salvar vidas!</span></p>

                        <div className="separator-horizontal"></div>

                        <button className="envolvase-item" onClick={() => setFormQueroJesusVisivel(true)}>
                            <AiOutlineHeart size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Quero Jesus</span>
                        </button>

                        <div className="separator-horizontal"></div>

                        <button className="envolvase-item" onClick={() => setFormLifeGroupVisivel(true)}>
                            <AiOutlineMessage size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Life Groups</span>
                        </button>
                        
                        <div className="separator-horizontal"></div>

                        <button onClick={() => setFormVoluntarioVisivel(true)} className="envolvase-item">
                            <AiOutlineTeam size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Voluntários</span>
                        </button>

                        <div className="separator-horizontal"></div>
                        
                        </div>
                </section>
            </div>
        </aside>
    );
}