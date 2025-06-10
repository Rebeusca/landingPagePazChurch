import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillSpotify } from 'react-icons/ai';
import { BiLogoDeezer } from "react-icons/bi";
import '@styles/footer/footer-section.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className="footer-image">
                    <img src="/img-header.png" alt="" />
                </div>
                <div className="contact-item">
                    <a href="https://www.facebook.com/pazquixeramobim" target="_blank">
                        <AiFillFacebook size={25} color="var(--color-gray-800)" />
                    </a>
                    <a href="https://www.instagram.com/pazquixeramobim/" target="_blank">
                        <AiFillInstagram size={25} color="var(--color-gray-800)" />
                    </a>
                    <a href="https://www.youtube.com/pazquixeramobim" target="_blank">
                        <AiFillYoutube size={25} color="var(--color-gray-800)" />
                    </a>
                    <a href="https://open.spotify.com/show/474foaQdJ5ewe2yGcRFhMF?si=a273abcb3a9e41f2" target="_blank">
                        <AiFillSpotify size={25} color="var(--color-gray-800)" />
                    </a>
                    <a href="https://dzr.page.link/mAgL7qTUBbAhhgYg6" target="_blank">
                        <BiLogoDeezer size={25} color="var(--color-gray-800)" />
                    </a>
                </div>
                <div className="footer-contact">
                    <div className="footer-address-item">
                        <p>Rua Antônio Conselheiro, 175</p>
                        <p>Centro - Quixeramobim, Ceará</p>
                    </div>
                    <span>© 2025 Paz Church. Todos os direitos reservados </span>
                </div>
            </div>
        </footer>
    );
}