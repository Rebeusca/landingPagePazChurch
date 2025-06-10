import React from 'react';
import './nossa-visao.css';
import { Link } from 'react-router-dom';
import '@styles/actions.css';
import { FaEye, FaBullseye, FaHeart, FaHandsHelping, FaPray, FaChurch, FaUsers, FaBook } from 'react-icons/fa';

export function NossaVisao() {
    // Dados dos valores da igreja
    const valoresIgreja = [
        {
            titulo: "Amor",
            descricao: "Expressar o amor de Cristo em cada ação, abraçando a todos com compaixão e respeito.",
            icon: <FaHeart size={32} />,
            cor: "#88cdff"
        },
        {
            titulo: "Serviço",
            descricao: "Servir a comunidade com humildade, atendendo às necessidades espirituais e sociais.",
            icon: <FaHandsHelping size={32} />,
            cor: "#64b5f6"
        },
        {
            titulo: "Oração",
            descricao: "Manter uma vida de oração constante, buscando a direção divina em todas as decisões.",
            icon: <FaPray size={32} />,
            cor: "#1976d2"
        },
        {
            titulo: "Comunidade",
            descricao: "Criar um ambiente acolhedor onde todos se sintam parte da família de Deus.",
            icon: <FaUsers size={32} />,
            cor: "#0d47a1"
        },
        {
            titulo: "Palavra",
            descricao: "Fundamentar todas as ações e ensinamentos na Palavra de Deus, sem comprometer a verdade bíblica.",
            icon: <FaBook size={32} />,
            cor: "#0b2344"
        }
    ];

    return (
        <main className="nossa-visao-main">
            <div className="nossa-visao-container">
                <div className="nossa-visao-header">
                    <h1>NOSSA VISÃO</h1>
                    <p className="nossa-visao-subtitle">
                        Construindo o Reino com propósito e fé
                    </p>
                </div>

                <div className="nossa-visao-content-container">
                    <div className="nossa-visao-content">
                        <p className="nossa-visao-description">
                            Na Paz Church Quixeramobim, temos uma visão clara do que Deus nos chamou para ser e fazer. 
                            Acreditamos em uma igreja que não apenas celebra aos domingos, mas que transforma vidas e impacta a comunidade todos os dias da semana.
                            Nossa visão, missão e valores orientam cada passo que damos como igreja.
                        </p>

                        <div className="visao-missao-container">
                            <div className="visao-card">
                                <div className="visao-card-icon">
                                    <FaEye size={48} color="#fff" />
                                </div>
                                <h2>Visão</h2>
                                <p>
                                    "Ser uma igreja que transforma vidas através do Evangelho, alcançando Quixeramobim e além com a mensagem de esperança e amor de Jesus Cristo, formando discípulos comprometidos com o Reino de Deus."
                                </p>
                            </div>

                            <div className="missao-card">
                                <div className="missao-card-icon">
                                    <FaBullseye size={48} color="#fff" />
                                </div>
                                <h2>Missão</h2>
                                <p>
                                    "Amar a Deus sobre todas as coisas, amar ao próximo como a si mesmo e fazer discípulos de todas as nações, ensinando-os a observar todas as coisas que Jesus ordenou."
                                </p>
                            </div>
                        </div>

                        <h2 className="valores-title">Nossos Valores</h2>
                        
                        <div className="valores-container">
                            {valoresIgreja.map((valor, index) => (
                                <div className="valor-card" key={index} style={{"--delay": index * 0.2 + "s", "--card-color": valor.cor}}>
                                    <div className="valor-icon" style={{backgroundColor: valor.cor}}>
                                        {valor.icon}
                                    </div>
                                    <h3>{valor.titulo}</h3>
                                    <p>{valor.descricao}</p>
                                </div>
                            ))}
                        </div>

                        <div className="visao-cta-section">
                            <div className="visao-cta-content">
                                <h2>Faça Parte Dessa Visão</h2>
                                <p>Junte-se a nós nessa jornada de fé e transformação. Sua presença é importante!</p>
                                <button className="visao-cta-button">
                                    <a href="/cultos" className="visao-cta-link">
                                        Conheça Nossos Cultos
                                    </a>
                                </button>
                            </div>
                        </div>
                        
                        <div className="button-actions">
                            <Link to="/" className="btn">Voltar para página inicial</Link>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}