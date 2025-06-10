import '@styles/main/main-cards-info-section.css';
import '@styles/main/main-media-cards.css';

export default function Main() {
    return (
        <main className='main-container'>
            <div className='main-content'>
                <article className='cards-info-section'>
                    <div className="celebration-card-primary">
                        <div className="card-content">
                            <h2 className="card-title">Cultos de Celebração</h2>
                            <p className="card-text">
                            Aos Domingos nos reunimos para adorar e expressar gratidão ao nosso Deus!<br />
                            Você e sua família são os nossos convidados especiais.
                            </p>
                            <a href="#" className="card-button">Saiba mais</a>
                        </div>
                    </div>
                    <div className="celebration-card-secondary">
                        <div className="card-content">
                            <h2 className="card-title">Seja um voluntário</h2>
                            <p className="card-text">Todas as atividades que os voluntários da Paz Church Quixeramobim<br/>exercem possuem um grande propósito: <b>salvar vidas</b>!</p>
                            <a href="#" className="card-button">Faça parte</a>
                        </div>
                    </div>
                    <div className="media-cards-container">
                        <div className="media-card app-card">
                            <div className="media-card-content">
                                <h2 className="app-media-card-title">
                                    Instale o nosso App
                                </h2>
                                
                                <p className="app-media-card-subtitle">Disponível para Android e iOS.</p>
                                <div className='separator-horizontal'></div>
                            </div>
                            <div className="app-media-card-buttons">
                                <a href="">
                                    <img src="main/card-app/google-play.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="main/card-app/app-store.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <a href="/celulas" className="media-card celulas-card">
                            <div className="media-card-content">
                                <h2 className="celula-media-card-title">
                                    Células - Life Group
                                </h2>
                                <p className="celula-media-card-subtitle">Participe de um de nossos Life Groups com a sua família</p>
                            </div>
                        </a>
                    </div>
                </article>
            </div>
        </main>
    );
}