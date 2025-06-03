import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillSpotify } from 'react-icons/ai';
import { BiLogoDeezer } from "react-icons/bi";
import '@styles/header/header-featured-message.css';
import '@styles/header/header-card-address-section.css';

export default function HeaderFeaturedMessage() {
    return (
        <div className='header-featured-message'>
            <div className='featured-message-content'>
                <section className='featured-message'>
                    <div className="overlay">
                        <div className="overlay-content">
                            <p className="label">PALAVRA RECENTE</p>
                            <h2 className="title">Casas de Paz | Lição 3: A Essência É Jesus</h2>
                            <div className="buttons">
                                <a href="#" className="btn primary">ACESSAR</a>
                                <a href="#" className="btn outline">CULTOS</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='info-section'>
                    <div className="info-container">
                        <div className="address-item">
                            <h4>CULTOS DE CELEBRAÇÃO</h4>
                            <p>Terça-feira: às <b>19h30</b></p>
                            <p>Domingo: às <b>17h</b> e <b>19h</b></p>
                        </div>

                        <div className='separator-vertical'></div>

                        <div className="address-item">
                            <h4>ENDEREÇO</h4>
                            <p>Rua Antônio Conselheiro, 175</p>
                            <p>Centro - Quixeramobim, Ceará</p>
                        </div>

                        <div className='separator-vertical'></div>

                        <div className="contact-item">
                            <a href="https://www.facebook.com/pazquixeramobim" target="_blank">
                                <AiFillFacebook size={25} color='#4B4B4B' />
                            </a>
                            <a href="https://www.instagram.com/pazquixeramobim/" target="_blank">
                                <AiFillInstagram size={25} color='#4B4B4B' />
                            </a>
                            <a href="https://www.youtube.com/pazquixeramobim" target="_blank">
                                <AiFillYoutube size={25} color='#4B4B4B' />
                            </a>
                            <a href="https://open.spotify.com/show/474foaQdJ5ewe2yGcRFhMF?si=a273abcb3a9e41f2" target="_blank">
                                <AiFillSpotify size={25} color='#4B4B4B' />
                            </a>
                            <a href="https://dzr.page.link/mAgL7qTUBbAhhgYg6" target="_blank">
                                <BiLogoDeezer size={25} color='#4B4B4B' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}