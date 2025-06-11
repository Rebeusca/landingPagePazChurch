import React from 'react';
import { Link } from 'react-router-dom';
import './cultos.css';
import '@styles/actions.css';

export function Cultos() {
    const cultosData = [
        {
            slug: "familia-unidos-em-cristo",
            title: "Culto de Família: Unidos em Cristo",
            desciption: "Neste culto especial, aprendemos sobre como fortalecer os laços familiares através da fé e do amor cristão.",
            image: "./pages/mensagens/cultos/card-cultos/culto-celebracao.svg",
            date: "04 de junho de 2025",
            preacher: "Pastor 1",
            preacherId: "1",
            preacherLink: "/pastores#1"
        },
        {
            slug: "oracao-poder-intercessao",
            title: "Culto de Oração: Poder da Intercessão",
            description: "Um momento poderoso de oração onde experimentamos a presença de Deus de forma especial, com muitos testemunhos de cura e libertação.",
            image: "./pages/mensagens/cultos/card-cultos/culto-oracao.svg",
            date: "31 de maio de 2025",
            preacher: "Pastor 2",
            preacherId: "2",
            preacherLink: "/pastores#2"
        },
        {
            slug: "jovem-geracao-radical",
            title: "Culto Jovem: Geração Radical",
            description: "Um culto cheio de energia onde os jovens foram desafiados a viver uma fé autêntica e radical em meio à sociedade atual.",
            image: "./pages/mensagens/cultos/card-cultos/culto-jovem.svg",
            date: "27 de maio de 2025",
            preacher: "Pastor 2",
            preacherId: "2",
            preacherLink: "/pastores#2"
        },
        {
            slug: "celebracao-honra-gloria",
            title: "Culto de Celebração: Honra e Glória",
            description: "Um momento especial de adoração e celebração onde experimentamos a glória de Deus por meio de louvores e da pregação da Palavra.",
            image: "./pages/mensagens/cultos/card-cultos/culto-adoracao.svg",
            date: "25 de maio de 2025",
            preacher: "Pastor 1",
            preacherId: "1",
            preacherLink: "/pastores#1"
        },
        {
            slug: "casais-alianca-eterna",
            title: "Culto de Casais: Aliança Eterna",
            description: "Um culto dedicado a fortalecer os casamentos, com ensinamentos práticos sobre comunicação, perdão e intimidade no relacionamento conjugal.",
            image: "./pages/mensagens/cultos/card-cultos/culto-casais.svg",
            date: "20 de maio de 2025",
            preacher: "Pastor 1",
            preacherId: "1",
            preacherLink: "/pastores#1"
        }
    ];

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
                            <img src={culto.image} alt={culto.title} className="culto-image" />
                        </div>
                        <div className="culto-info">
                            <h2>{culto.title}</h2>
                            <p className='culto-description'>{culto.description}</p>
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