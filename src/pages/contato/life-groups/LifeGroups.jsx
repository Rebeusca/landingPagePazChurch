import React from 'react';
import { Link } from 'react-router-dom';
import { lifeGroupsData } from './life-groups-data';
import './life-groups.css';
import '@styles/actions.css';

export function LifeGroups() {
    return (
        <>
            <header className="life-groups-header">
                <h1>LIFE GROUPS</h1>
                <p>
                    Conecte-se com outros membros da nossa comunidade e cresça na fé.
                </p>
            </header>

            <main className="life-groups-main">
                <section className="life-groups-introduction">
                    <h2 className="life-groups-section-title">O que são Life Groups?</h2>
                    <p>
                        São pequenos grupos que se reúnem semanalmente para estudar a Bíblia, orar e compartilhar experiências. É uma ótima oportunidade para fortalecer sua fé e fazer novas amizades em um ambiente acolhedor e familiar.
                    </p>
                    <p>
                        Em nossos grupos, você encontrará pessoas comprometidas com o crescimento espiritual e dispostas a caminhar juntas na jornada da fé. Venha fazer parte desta família!
                    </p>
                </section>

                <section className="life-groups-list">
                    <h2 className="life-groups-section-title">Nossos Grupos</h2>
                    <div className="life-groups-items">
                        {lifeGroupsData.map((group, index) => (
                            <div className="life-group-item" key={index}>
                                <img 
                                    src={group.image} 
                                    alt={group.title} 
                                    className="life-group-image" 
                                />
                                
                                <div className="life-group-info">
                                    <h3>{group.title}</h3>
                                    
                                    <p><strong>Endereço:</strong></p>
                                    <ul>
                                        <li>{group.location.st}</li>
                                        <li>{group.location.dist}</li>
                                        {group.location.cir && <li>{group.location.cir}</li>}
                                    </ul>
                                    <p><strong>Horário:</strong> {group.meetingTime}</p>
                                </div>
                                
                                <div className="life-group-contact">
                                    <i className="fas fa-user"></i>
                                    <span>{group.contact.name} - {group.contact.phone}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <div className="button-actions">
                    <a href="https://paz.church/" target="_blank" rel="noopener noreferrer">
                        <button className='btn'>Voltar para página inicial</button>
                    </a>
                </div>
            </main>
        </>
    );
}