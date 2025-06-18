import "./contribua.css";
import "@styles/actions.css";
import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, HandCoins } from "lucide-react";

export function Contribua() {
    return (
        <>
            <header className="contribua-header">
                <h1 className="contribua-title">CONTRIBUA</h1>
                <p className="contribua-subtitle">
                    Sua contribuição é muito importante para a nossa missão.
                </p>
            </header>


            <main className="contribua-main">
                <section className="contribua-destaques">
                    <h2 className="contribua-section-title">Por que contribuir?</h2>
                    <div className="contribua-content contribua-mensagem">
                        <p>Sua contribuição é fundamental para mantermos nossas atividades e projetos funcionando. Com suas ofertas, podemos:</p>
                        <ul>
                            <li>Manter nossa estrutura de atendimento e cultos</li>
                            <li>Sustentar projetos sociais que beneficiam nossa comunidade</li>
                            <li>Apoiar missionários em campos nacionais e internacionais</li>
                            <li>Desenvolver materiais de educação cristã para todas as idades</li>
                        </ul>
                        <p className="contribua-versiculos">"Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7</p>
                    </div>
                </section>

                <h2 className="contribua-section-title">Formas de Contribuição</h2>
                
                <div className="contribua-content">
                    <div className="contribua-instructions-pix">
                        <div className="contribua-instructions-pix-header">
                            <h2>PIX</h2>
                            <span>Dízimo e ofertas</span>
                            <img src="/public/pages/contribua/contribuaQRCode.svg" alt="QR Code para pagamento via PIX" />
                        </div>
                        <div className="contribua-instructions-pix-details">
                            <p>Agência: 1234</p>
                            <p>Conta: 56789-0</p>
                            <p>Banco: Banco Exemplo</p>
                            <p>CNPJ: 12.345.678/0001-90</p>
                            <p>Nome: Igreja Paz</p>
                        </div>
                    </div>
                    
                    <div className="contribua-highlight">
                        <p><strong>Importante:</strong> Após realizar a transferência, envie o comprovante para o nosso WhatsApp (11) 9xxxx-xxxx.</p>
                    </div>
                </div>
                
                <div className="contribua-content">
                    <div className="contribua-instructions">
                        <div className="contribua-method-icon">
                            <i className="fas fa-credit-card"></i>
                            <CreditCard color="var(--color-white)" size={30}/>
                        </div>
                        <h2>Cartão de crédito</h2>
                        <span>Você pode contribuir com o seu cartão de crédito através do nosso sistema seguro. As doações podem ser parceladas em até 12x.</span>
                        <a href="https://example.com/donate" className="btn">Contribuir</a>
                    </div>
                </div>
                
                <div className="contribua-content">
                    <div className="contribua-instructions">
                        <div className="contribua-method-icon">
                            <i className="fas fa-university"></i>
                            <HandCoins color="var(--color-white)" size={30}/>
                        </div>
                        <h2>Transferência bancária</h2>
                        <span>Você pode fazer uma transferência bancária para a nossa conta.</span>
                        <p>Agência: 1234</p>
                        <p>Conta: 56789-0</p>
                        <p>Banco: Banco Exemplo</p>
                        <p>CNPJ: 12.345.678/0001-90</p>
                        <p>Nome: Igreja Paz</p>
                    </div>
                </div>
                <div className="button-actions">
                    <Link to="/" className="btn">Voltar para página inicial</Link>
                </div>
            </main>

        </>
    );
}