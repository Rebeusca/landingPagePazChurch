import React from 'react';
import { Link } from 'react-router-dom';
import './cultos.css';
import '@styles/actions.css';

export function Cultos() {
    const cultosData = [
        {
            titulo: "Culto de Família: Unidos em Cristo",
            descricao: "Neste culto especial, aprendemos sobre como fortalecer os laços familiares através da fé e do amor cristão.",
            imagem: "./pages/mensagens/cultos/card-cultos/culto-celebracao.svg",
            data: "04 de junho de 2025",
            pregador: "Pastor 1",
            pastorId: "1",
            pastorLink: "/pastores#1",
            slug: "familia-unidos-em-cristo"
        },
        {
            titulo: "Culto de Oração: Poder da Intercessão",
            descricao: "Um momento poderoso de oração onde experimentamos a presença de Deus de forma especial, com muitos testemunhos de cura e libertação.",
            imagem: "./pages/mensagens/cultos/card-cultos/culto-oracao.svg",
            data: "31 de maio de 2025",
            pregador: "Pastor 2",
            pastorId: "2",
            pastorLink: "/pastores#2",
            slug: "oracao-poder-intercessao"
        },
        {
            titulo: "Culto Jovem: Geração Radical",
            descricao: "Um culto cheio de energia onde os jovens foram desafiados a viver uma fé autêntica e radical em meio à sociedade atual.",
            imagem: "./pages/mensagens/cultos/card-cultos/culto-jovem.svg",
            data: "27 de maio de 2025",
            pregador: "Pastor 2",
            pastorId: "2",
            pastorLink: "/pastores#2",
            slug: "jovem-geracao-radical"
        },
        {
            titulo: "Culto de Celebração: Honra e Glória",
            descricao: "Um momento especial de adoração e celebração onde experimentamos a glória de Deus por meio de louvores e da pregação da Palavra.",
            imagem: "./pages/mensagens/cultos/card-cultos/culto-adoracao.svg",
            data: "25 de maio de 2025",
            pregador: "Pastor 1",
            pastorId: "1",
            pastorLink: "/pastores#1",
            slug: "celebracao-honra-gloria"
        },
        {
            titulo: "Culto de Casais: Aliança Eterna",
            descricao: "Um culto dedicado a fortalecer os casamentos, com ensinamentos práticos sobre comunicação, perdão e intimidade no relacionamento conjugal.",
            imagem: "./pages/mensagens/cultos/card-cultos/culto-casais.svg",
            data: "20 de maio de 2025",
            pregador: "Pastor 1",
            pastorId: "1",
            pastorLink: "/pastores#1",
            slug: "casais-alianca-eterna"
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
                            <img src={culto.imagem} alt={culto.titulo} className="culto-image" />
                        </div>
                        <div className="culto-info">
                            <h2>{culto.titulo}</h2>
                            <p className='culto-description'>{culto.descricao}</p>
                            <div className="culto-details">
                                <p><strong>Data:</strong> {culto.data}</p>
                                <p>
                                    <strong>Pastor:</strong>{' '}
                                    <Link to={culto.pastorLink} className="pastor-link">
                                        {culto.pregador}
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