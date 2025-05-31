import '../styles/header-section.css';
import '../styles/header-featured-message.css';
import '../styles/header-card-address-section.css';
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillSpotify } from 'react-icons/ai';
import { BiLogoDeezer } from "react-icons/bi";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (key) => {
        setOpenDropdown(openDropdown === key ? null : key);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <header className='header-container'>
            <div className='header-container-content'>
                <div className='header-content'>
                    <div className='header-left'>
                        {/* Botão do menu mobile */}
                        <button className='menu-toggle' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <Menu size={28} color='#0B2344' />
                        </button>
                        <div className='header-logo'>
                            <a href="">
                                <img src="/img-header.png" alt="Logo" />
                            </a>
                        </div>
                    </div>

                    <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul className='nav-list' onClick={closeMenu}>
                            <li
                                className={`dropdown ${openDropdown === 'sobre' ? 'open' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDropdownToggle('sobre');
                                }}
                            >
                                <span className='dropdown-label'>
                                    SOBRE NÓS
                                    <ChevronDown size={10} color='#0B2344'/>
                                </span>
                                <ul className='dropdown-menu'>
                                    <li><a href="/quem-somos">QUEM SOMOS</a></li>
                                    <li><a href="/pastores">PASTORES</a></li>
                                    <li><a href="/campus">NOSSOS CÂMPUS</a></li>
                                    <li><a href="/visao">NOSSA VISÃO</a></li>
                                </ul>
                            </li>

                            <li
                                className={`dropdown ${openDropdown === 'mensagens' ? 'open' : ''}`}
                                onClick={(e) => {
                                e.stopPropagation();
                                handleDropdownToggle('mensagens');
                                }}
                            >
                                <span className='dropdown-label'>
                                MENSAGENS <ChevronDown size={10} color='#0B2344' />
                                </span>
                                <ul className='dropdown-menu'>
                                <li><a href="/cultos">CULTOS</a></li>
                                <li><a href="/especiais">ESPECIAIS</a></li>
                                <li><a href="/series">SÉRIES</a></li>
                                </ul>
                            </li>

                            <li><a href="#agenda">AGENDA</a></li>

                            <li><a href="#contribua">CONTRIBUA</a></li>

                            <li
                                className={`dropdown ${openDropdown === 'contato' ? 'open' : ''}`}
                                onClick={(e) => {
                                e.stopPropagation();
                                handleDropdownToggle('contato');
                                }}
                            >
                                <span className='dropdown-label'>
                                CONTATO <ChevronDown size={10} color='#0B2344' />
                                </span>
                                <ul className='dropdown-menu'>
                                <li><a href="/células">CÉLULAS</a></li>
                                <li><a href="/voluntários">VOLUNTÁRIOS</a></li>
                                </ul>
                            </li>

                            <li><a href="#+cidades">+ CIDADES</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
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
        </header>
    );
}