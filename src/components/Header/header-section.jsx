// Logo and navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                            <Menu size={28} color="var(--color-brand-dark-blue)" />
                        </button>
                        <div className='header-logo'>
                            <Link to="/">
                                <img src="/img-header.png" alt="Logo" />
                            </Link>
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
                                    <ChevronDown size={10} color="var(--color-brand-dark-blue)"/>
                                    <ChevronDown size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon down'/>
                                    <ChevronUp size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon up'/>
                                </span>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/nossa-historia">NOSSA HISTÓRIA</Link></li>
                                    <li><Link to="/pastores">PASTORES</Link></li>
                                    <li><Link to="/visao">NOSSA VISÃO</Link></li>
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
                                <ChevronDown size={10} color="var(--color-brand-dark-blue)" />
                                <ChevronDown size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon down'/>
                                <ChevronUp size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon up'/>
                                </span>
                                <ul className='dropdown-menu'>
                                <li><Link to="/cultos">CULTOS</Link></li>
                                <li><Link to="/series">SERIES</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/agenda">AGENDA</Link></li>

                            <li><Link to="/contribua">CONTRIBUA</Link></li>

                            <li
                                className={`dropdown ${openDropdown === 'contato' ? 'open' : ''}`}
                                onClick={(e) => {
                                e.stopPropagation();
                                handleDropdownToggle('contato');
                                }}
                            >
                                <span className='dropdown-label'>
                                CONTATO
                                <ChevronDown size={10} color="var(--color-brand-dark-blue)" />
                                <ChevronDown size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon down'/>
                                <ChevronUp size={15} color="var(--color-brand-dark-blue)" className='mobile-dropdown-icon up'/>
                                </span>
                                <ul className='dropdown-menu'>
                                <li><Link to="/life-groups">LIFE GROUPS</Link></li>
                                <li><Link to="/devocional">DEVOCIONAIS</Link></li>
                                {/* <li><Link to="/voluntarios">VOLUNTÁRIOS</Link></li> */}
                                </ul>
                            </li>

                            <li><Link to="https://paz.church/" target="_blank" rel="noopener noreferrer">+ CIDADES</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}