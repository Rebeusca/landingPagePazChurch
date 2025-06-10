import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cultosData } from './culto-data';
import { jsPDF } from 'jspdf';
import './detail-culto.css';

export function DetailCulto() {
    const { slug } = useParams();
    const culto = cultosData.find((c) => c.slug === slug);

    if (!culto) {
        return (
            <div className="detalhe-culto-container">
                <div className="detalhe-culto-content">
                    <h2>Culto não encontrado</h2>
                    <p>O culto que você está procurando não está disponível.</p>
                    <div className="detalhe-culto-actions">
                        <Link to="/cultos" className="btn btn-secondary">Voltar para cultos</Link>
                    </div>
                </div>
            </div>
        );
    }

    function handleDownloadPDF() {
        const doc = new jsPDF();
        const marginX = 10;
        let cursorY = 20;

        // Adiciona a imagem no topo
        const imgWidth = 60;
        const imgHeight = 15;

        const img = new Image();
        img.src = '/img-header.png';

        img.onload = () => {
            doc.addImage(img, 'JPEG', marginX, 10, imgWidth, imgHeight);
            cursorY = 10 + imgHeight + 10;

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(16);
            doc.text(culto.titulo, marginX, cursorY);

            cursorY += 10;
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(11);
            doc.text(`Data: ${culto.data}`, marginX, cursorY);

            cursorY += 7;
            doc.text(`Pregador: ${culto.pregador}`, marginX, cursorY);

            cursorY += 7;
            doc.setFont('Helvetica', 'bold');
            doc.text(`Tema: ${culto.tema}`, marginX, cursorY);
            doc.setFont('Helvetica', 'normal');
            const temaLines = doc.splitTextToSize(culto.tema, 180);
            cursorY += 5;
            doc.text(temaLines, marginX, cursorY);
            cursorY += temaLines.length * 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Resumo:`, marginX, cursorY);
            doc.setFont('Helvetica', 'normal');
            const resumoLines = doc.splitTextToSize(culto.resumo, 180);
            cursorY += 5;
            doc.text(resumoLines, marginX, cursorY);
            cursorY += resumoLines.length * 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Referências Bíblicas:`, marginX, cursorY);
            cursorY += 7;
            doc.setFont('Helvetica', 'normal');
            culto.referencias.forEach((ref) => {
                doc.text(`- ${ref}`, marginX + 5, cursorY);
                cursorY += 6;
            });

            cursorY += 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Pontos Principais:`, marginX, cursorY);
            cursorY += 7;
            doc.setFont('Helvetica', 'normal');
            culto.pontosPrincipais.forEach((ponto) => {
                const titulo = `• ${ponto.titulo}:`;
                const descLines = doc.splitTextToSize(ponto.descricao, 170);
                doc.text(titulo, marginX + 3, cursorY);
                cursorY += 6;
                doc.text(descLines, marginX + 7, cursorY);
                cursorY += descLines.length * 6;
            });

            cursorY += 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Conclusão:`, marginX, cursorY);
            cursorY += 7;
            doc.setFont('Helvetica', 'normal');
            const conclusaoLines = doc.splitTextToSize(culto.conclusao, 180);
            doc.text(conclusaoLines, marginX, cursorY);

            doc.save(`${culto.slug}.pdf`);
        };
    }

    return (
        <div className="detalhe-culto-container">
            <div
                className="detalhe-culto-header"
                style={{ 
                    backgroundImage: `url(${culto.imagemFundo})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <h1>{culto.titulo}</h1>
                <div className="detalhe-culto-data">{culto.data}</div>
                <Link to={culto.pastorLink} className="detalhe-culto-pregador">
                    {culto.pregador}
                </Link>
            </div>

            <div className="detalhe-culto-content">
                <h2 className="detalhe-culto-tema">{culto.tema}</h2>
                <p className="detalhe-culto-resumo">{culto.resumo}</p>

                <section className="detalhe-culto-referencias">
                    <h3>Referências Bíblicas</h3>
                    <ul>
                        {culto.referencias.map((referencia, index) => (
                            <li key={index}>{referencia}</li>
                        ))}
                    </ul>
                </section>

                <section className="detalhe-culto-pontos-principais">
                    <h3>Pontos Principais</h3>
                    <div className="detalhe-culto-pontos-lista">
                        {culto.pontosPrincipais.map((ponto, index) => (
                            <div className="detalhe-culto-ponto" key={index}>
                                <h4>{ponto.titulo}</h4>
                                <p>{ponto.descricao}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="detalhe-culto-conclusao">
                    {culto.conclusao}
                </div>
                
                <div className="detalhe-culto-actions">
                    <Link to="/cultos" className="btn btn-secondary">Voltar para cultos</Link>
                    <a href="#" className="btn btn-primary" onClick={handleDownloadPDF}>Download da mensagem</a>
                </div>
            </div>
        </div>
    );
}
