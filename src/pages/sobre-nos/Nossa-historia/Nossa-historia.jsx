import React from 'react';
import './nossa-historia.css';
import { Link } from 'react-router-dom';
import '@styles/actions.css';
import { FaChurch, FaHome, FaUsers, FaHandsHelping, FaBuilding } from 'react-icons/fa';

export function NossaHistoria() {
    // Dados da timeline com imagens e ícones para cada evento
    const timelineEvents = [
        {
            year: '2015',
            title: 'Fundação da Igreja',
            description: 'Início das primeiras reuniões em uma pequena sala com apenas 20 pessoas.',
            image: './pages/sobre-nos/nossa-historia/timeline-images/fundacao-2015.svg',
            icon: <FaHome size={24} />,
            iconColor: "var(--color-primary-lightest)"
        },
        {
            year: '2017',
            title: 'Primeiro Templo',
            description: 'Inauguração do primeiro espaço próprio no centro de Quixeramobim.',
            image: './pages/sobre-nos/nossa-historia/timeline-images/templo-2017.svg',
            icon: <FaChurch size={24} />,
            iconColor: "var(--color-primary-light)"
        },
        {
            year: '2019',
            title: 'Início do Ministério de Células',
            description: 'Expansão do trabalho com a criação dos primeiros grupos familiares em diferentes bairros.',
            image: './pages/sobre-nos/nossa-historia/timeline-images/celulas-2019.svg',
            icon: <FaUsers size={24} />,
            iconColor: "var(--color-primary)"
        },
        {
            year: '2021',
            title: 'Ações Sociais',
            description: 'Início dos projetos sociais de apoio à comunidade local durante a pandemia.',
            image: './pages/sobre-nos/nossa-historia/timeline-images/social-2021.svg',
            icon: <FaHandsHelping size={24} />,
            iconColor: "var(--color-primary-medium)"
        },
        {
            year: '2023',
            title: 'Ampliação do Templo',
            description: 'Inauguração do novo e ampliado espaço de culto para acomodar o crescimento da igreja.',
            image: './pages/sobre-nos/nossa-historia/timeline-images/ampliacao-2023.svg',
            icon: <FaBuilding size={24} />,
            iconColor: "var(--color-primary-dark)"
        }
    ];

    return (
        <main className="nossa-historia-main">
            <div className="nossa-historia-container">
                <div className='nossa-historia-header'>
                    <h1 className="nossa-historia-title">NOSSA HISTÓRIA</h1>
                    <p className="nossa-historia-subtitle">
                        Somos uma família que não para de crescer
                    </p>
                </div>
                <div className="nossa-historia-content-container">
                    <div className="nossa-historia-content">
                        <p className="nossa-historia-description">
                            Desde o início, nossa missão sempre foi clara: ser um lugar de esperança, onde cada pessoa possa experimentar
                            o amor de Deus de forma genuína.
                            Ao longo dos anos, vimos vidas restauradas, famílias transformadas e uma comunidade que cresce unida pela fé.
                            Cada etapa marcou nossa história com desafios superados, milagres vividos e promessas cumpridas.
                            Abaixo, você pode acompanhar os principais marcos da nossa trajetória. Essa também é a sua história.
                            <br/>
                            Com o passar dos anos, temos visto vidas transformadas, famílias restauradas e uma comunidade unida em torno da fé. Nossa história é marcada por desafios, mas também por vitórias que celebramos juntos.
                        </p>
                        
                        <h2 className="timeline-title">Bem vindo à Jornada da Paz Church Quixeramobim</h2>
                        
                        <div className="timeline">
                            {timelineEvents.map((event, index) => (
                                <div 
                                    className="timeline-item" 
                                    key={event.year}
                                    style={{"--i": index + 1}}
                                >
                                    <div className="timeline-date" style={{backgroundColor: event.iconColor}}>
                                        <span className="timeline-year">{event.year}</span>
                                        <span className="timeline-icon">
                                            {event.icon}
                                        </span>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-content-text">
                                            <h3>{event.title}</h3>
                                            <p>{event.description}</p>
                                        </div>
                                        {/* Imagem que aparece abaixo do texto quando passa o mouse */}
                                        <img
                                            src={event.image}
                                            alt={`${event.title} em ${event.year}`}
                                            className="timeline-image"
                                            onError={(e) => {
                                                // Fallback se a imagem não for encontrada
                                                e.target.style.backgroundColor = event.iconColor;
                                                e.target.style.height = '180px';
                                                e.target.style.display = 'flex';
                                                e.target.style.justifyContent = 'center';
                                                e.target.style.alignItems = 'center';
                                                e.target.style.color = 'white';
                                                e.target.style.fontWeight = 'bold';
                                                e.target.style.fontSize = '1.2rem';
                                                e.target.innerHTML = `
                                                    <div style="text-align:center;padding:15px;">
                                                        <div style="font-size:2rem;margin-bottom:10px;">
                                                            ${event.title}
                                                        </div>
                                                        <div>${event.year}</div>
                                                    </div>
                                                `;
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="nossa-historia-footer-container">
                            <p className="nossa-historia-footer">
                                Nossa história está sendo escrita com fé, se você deseja fazer parte dessa história, convidamos
                                você a se juntar a nós em nossos cultos e eventos. 
                                Sua vida pode ser transformada e você pode fazer parte dessa linda jornada de fé e amor.
                                O melhor ainda está por vir!
                            </p>
                            <p className="nossa-historia-footer">
                                "Estou convencido de que aquele que começou boa obra em vocês, vai completá-la até o dia de Cristo Jesus."
                                <br/>
                                📖 Filipenses 1:6
                            </p>
                        </div>

                        <div className="button-actions">
                            <Link 
                                to="/" 
                                className="btn"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                                >
                                Voltar para página inicial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}