import React from 'react';
import '@styles/aside/aside-spotify-card.css';
import '@styles/aside/aside-card-events.css';

export default function SpotifyCard() {
    return (
        <div className="spotify-card">
            <div className="spotify-header">
                <div className="spotify-title-container">
                <h2 className="spotify-title">Ouça no</h2>
                <h2 className="spotify-title spotify-brand">Spotify</h2>
                <p className="spotify-subtitle">Paz Church Quixeramobim | Podcast</p>
                </div>
            </div>
            <div className="spotify-iframe-container">
                <iframe
                style={{borderRadius:'12px'}}
                src="https://open.spotify.com/embed/show/474foaQdJ5ewe2yGcRFhMF?utm_source=generator" 
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe>
            </div>
        </div>
    );
}