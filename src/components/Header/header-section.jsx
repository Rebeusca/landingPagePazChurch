// Logo and navbar
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, Minus } from 'lucide-react';
import '@styles/header/header-section.css';

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
                                    <ChevronDown size={15} color='#0B2344' className='mobile-dropdown-icon down'/>
                                    <ChevronUp size={15} color='#0B2344' className='mobile-dropdown-icon up'/>
                                </span>
                                <ul className='dropdown-menu'>
                                    <li><a href="/quem-somos">QUEM SOMOS</a></li>
                                    <li><a href="/pastores">PASTORES</a></li>
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
                                MENSAGENS 
                                <ChevronDown size={10} color='#0B2344' />
                                <ChevronDown size={15} color='#0B2344' className='mobile-dropdown-icon down'/>
                                <ChevronUp size={15} color='#0B2344' className='mobile-dropdown-icon up'/>
                                </span>
                                <ul className='dropdown-menu'>
                                <li><a href="/cultos">CULTOS</a></li>
                                <li><a href="/especiais">ESPECIAIS</a></li>
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
                                CONTATO 
                                <ChevronDown size={10} color='#0B2344' />
                                <ChevronDown size={15} color='#0B2344' className='mobile-dropdown-icon down'/>
                                <ChevronUp size={15} color='#0B2344' className='mobile-dropdown-icon up'/>
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
        </header>
    );
}