import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cultosData } from './culto-data';
import { jsPDF } from 'jspdf';
import { executeReCaptcha } from '../../../../utils/recaptchaUtils';
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

    async function verificarReCAPTCHA(e) {
        e.preventDefault();
        
        const downloadBtn = e.currentTarget;
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = 'Verificando segurança...';
        downloadBtn.disabled = true;
                
        const resetButton = () => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        };
        
        const processarDownload = () => {
            downloadBtn.innerHTML = 'Preparando PDF...';
            try {
                handleDownloadPDF();
                setTimeout(() => {
                    downloadBtn.innerHTML = 'Download concluído!';
                    setTimeout(resetButton, 2000);
                }, 1000);
            } catch (error) {
                downloadBtn.innerHTML = 'Erro ao gerar PDF';
                setTimeout(resetButton, 2000);
            }
        };

        try {
            const result = await executeReCaptcha('download');
            
            if (result && result.success) {
                processarDownload();
            } else {
                resetButton();
                if (result && result.score !== undefined) {
                    alert(`Verificação de segurança falhou (score: ${result.score}). Para sua segurança, tente novamente mais tarde.`);
                } else {
                    alert('Falha na verificação de segurança. Tente novamente.');
                }
            }
        } catch (error) {
            resetButton();
            console.error('Erro na verificação do reCAPTCHA:', error);
            alert('Ocorreu um erro ao verificar a segurança. Tente novamente.');
        }
    }

    function handleDownloadPDF() {
        const doc = new jsPDF();
        const marginX = 10;
        let cursorY = 20;

        const imgWidth = 60;
        const imgHeight = 15;

        const img = new Image();
        img.src = '/img-header.png';

        img.onload = () => {
            doc.addImage(img, 'JPEG', marginX, 10, imgWidth, imgHeight);
            cursorY = 10 + imgHeight + 10;

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(16);
            doc.text(culto.title, marginX, cursorY);

            cursorY += 10;
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(11);
            doc.text(`Data: ${culto.date}`, marginX, cursorY);

            cursorY += 7;
            doc.text(`Pregador: ${culto.preacher}`, marginX, cursorY);

            cursorY += 7;
            doc.setFont('Helvetica', 'bold');
            doc.text(`Tema: ${culto.theme}`, marginX, cursorY);
            doc.setFont('Helvetica', 'normal');
            const temaLines = doc.splitTextToSize(culto.theme, 180);
            cursorY += 5;
            doc.text(temaLines, marginX, cursorY);
            cursorY += temaLines.length * 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Resumo:`, marginX, cursorY);
            doc.setFont('Helvetica', 'normal');
            const resumoLines = doc.splitTextToSize(culto.abstract, 180);
            cursorY += 5;
            doc.text(resumoLines, marginX, cursorY);
            cursorY += resumoLines.length * 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Referências Bíblicas:`, marginX, cursorY);
            cursorY += 7;
            doc.setFont('Helvetica', 'normal');
            culto.references.forEach((ref) => {
                doc.text(`- ${ref}`, marginX + 5, cursorY);
                cursorY += 6;
            });

            cursorY += 7;

            doc.setFont('Helvetica', 'bold');
            doc.text(`Pontos Principais:`, marginX, cursorY);
            cursorY += 7;
            doc.setFont('Helvetica', 'normal');
            culto.mainPoints.forEach((ponto) => {
                const titulo = `• ${ponto.title}:`;
                const descLines = doc.splitTextToSize(ponto.description, 170);
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
            const conclusaoLines = doc.splitTextToSize(culto.conclusion, 180);
            doc.text(conclusaoLines, marginX, cursorY);

            doc.save(`${culto.slug}.pdf`);
        };
    }

    return (
        <div className="detalhe-culto-container">
            <div
                className="detalhe-culto-header"
                style={{ 
                    backgroundImage: `url(${culto.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <h1>{culto.title}</h1>
                <div className="detalhe-culto-data">{culto.date}</div>
                <Link to={culto.preacherLink} className="detalhe-culto-pregador">
                    {culto.preacher}
                </Link>
            </div>

            <div className="detalhe-culto-content">
                <h2 className="detalhe-culto-tema">{culto.theme}</h2>
                <p className="detalhe-culto-resumo">{culto.abstract}</p>

                <section className="detalhe-culto-referencias">
                    <h3>Referências Bíblicas</h3>
                    <ul>
                        {culto.references.map((referencia, index) => (
                            <li key={index}>{referencia}</li>
                        ))}
                    </ul>
                </section>

                <section className="detalhe-culto-pontos-principais">
                    <h3>Pontos Principais</h3>
                    <div className="detalhe-culto-pontos-lista">
                        {culto.mainPoints.map((ponto, index) => (
                            <div className="detalhe-culto-ponto" key={index}>
                                <h4>{ponto.title}</h4>
                                <p>{ponto.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="detalhe-culto-conclusao">
                    {culto.conclusion}
                </div>
                
                <div className="detalhe-culto-actions">
                    <Link to="/cultos" className="btn btn-secondary">Voltar para cultos</Link>

                    <a href="#" className="btn btn-primary" onClick={verificarReCAPTCHA}>
                        <i className="fas fa-download"></i> Download da mensagem (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}
