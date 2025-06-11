import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/header-section';
import HeaderFeaturedMessage from '@components/Header/header-hero-section';
import Main from '@components/Main/main-section';
import Aside from '@components/Aside/aside-section';
import SpotifyCard from '@components/Aside/aside-spotify-card';
import Footer from '@components/Footer/footer-section';
import ScrollToTop from '@components/ScrollToTop';
import { NossaHistoria } from '@pages/sobre-nos/Nossa-historia/Nossa-historia';
import { Pastores } from '@pages/sobre-nos/Pastores/Pastores';
import { NossaVisao } from '@pages/sobre-nos/Nossa-visao/Nossa-visao';
import { Cultos } from '@pages/mensagens/cultos/Cultos';
import { Series } from '@pages/mensagens/especiais/Series';
import { DetailCulto } from '@pages/mensagens/cultos/details/DetailCulto';
import { DetailSeries } from './pages/mensagens/especiais/details/DetailSeries';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={
          <>
            <HeaderFeaturedMessage />
            <div className='cards-grid-wrapper'>
              <Main />
              <div className='aside-container'>
                <Aside />
                <SpotifyCard />
              </div>
            </div>
          </>
        } />
        
        {/* Páginas específicas */}
        <Route path="/nossa-historia" element={<NossaHistoria />} />
        <Route path="/pastores" element={<Pastores />} />
        <Route path="/visao" element={<NossaVisao />} />
        <Route path='/cultos' element={<Cultos />} />
        <Route path='/series' element={<Series />} />
        
        {/* Páginas detalhadas de cultos */}
        <Route path='/cultos/:slug' element={<DetailCulto />} />
        <Route path='/series/:slug' element={<DetailSeries/>} />

        {/* Redirecionamento para a página inicial */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App
