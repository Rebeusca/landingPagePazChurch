import '../styles/aside-card-events.css';
import '../styles/aside-card-forms.css';
import { AiOutlineHeart, AiOutlineMessage, AiOutlineTeam, AiOutlinePlusCircle, AiOutlineGift } from 'react-icons/ai';

export default function Aside() {
    return (
        <aside className='aside-container'>
            <div className='aside-content'>
                <section className='events-card'>
                    <div className='events-card-content'>
                        <h2 className='events-card-title'>Próximos Eventos</h2>
                        <p className='events-card-text'>
                            Fique por dentro dos nossos próximos eventos e participe conosco!
                        </p>
                    </div>
                </section>
                <section>
                    <div className="envolvase-container aside-column-item">
                        <h2 className="envolvase-title">Envolva-se</h2>
                        <p className="envolvase-subtitle">nesse propósito: <span className="highlight">salvar vidas!</span></p>

                        <div className="separator-horizontal"></div>
                        
                        <a href="/quero-jesus" className="envolvase-item">
                            <AiOutlineHeart size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Quero Jesus</span>
                        </a>
                        
                        <div className="separator-horizontal"></div>
                        
                        <a href="/celulas" className="envolvase-item">
                            <AiOutlineMessage size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Células</span>
                        </a>
                        
                        <div className="separator-horizontal"></div>
                        
                        <a href="/voluntarios" className="envolvase-item">
                            <AiOutlineTeam size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Voluntários</span>
                        </a>
                        
                        <div className="separator-horizontal"></div>
                        
                        <a href="/quero-oracao" className="envolvase-item">
                            <AiOutlinePlusCircle size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Quero Oração</span>
                        </a>
                        
                        <div className="separator-horizontal"></div>
                        
                        <a href="/contribua" className="envolvase-item">
                            <AiOutlineGift size={22} className="envolvase-icon" />
                            <span className="envolvase-text">Contribua</span>
                        </a>
                        
                        <div className="separator-horizontal"></div>
                        </div>
                </section>
            </div>
        </aside>
    );
}