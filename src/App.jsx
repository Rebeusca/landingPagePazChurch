import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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
import { Agenda } from '@pages/agenda/Agenda';
import { Contribua } from '@pages/contribua/Contribua';
import { LifeGroups } from '@pages/contato/life-groups/LifeGroups';
import Devocional from '@pages/contato/devocional/devocional';
import { QuerJesus } from '@components/Aside/Forms/querJesus/QuerJesus';
import { LifeGroupForm } from '@components/Aside/Forms/lifeGroup/LifeGroupForm'
import { Voluntario } from '@components/Aside/Forms/voluntario/Voluntario';
import './App.css';

function App() {
  const [formQueroJesusVisivel, setFormQueroJesusVisivel] = useState(false);
  const [formLifeGroupVisivel, setFormLifeGroupVisivel] = useState(false);
  const [formVoluntarioVisivel, setFormVoluntarioVisivel] = useState(false);

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
                <Aside 
                  setFormQueroJesusVisivel={setFormQueroJesusVisivel} 
                  setFormLifeGroupVisivel={setFormLifeGroupVisivel} 
                  setFormVoluntarioVisivel={setFormVoluntarioVisivel} 
                />
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
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/contribua' element={<Contribua />} />
        <Route path='/life-groups' element={<LifeGroups />} />
        <Route path='/devocional' element={<Devocional />} />

        {/* Páginas detalhadas de cultos */}
        <Route path='/cultos/:slug' element={<DetailCulto />} />
        <Route path='/series/:slug' element={<DetailSeries/>} />

        {/* Redirecionamento para a página inicial */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
      
      <Footer />

      {/* Formulários flutuantes */}
      {formQueroJesusVisivel && <QuerJesus onClose={() => setFormQueroJesusVisivel(false)} />}
      {formLifeGroupVisivel && <LifeGroupForm onClose={() => setFormLifeGroupVisivel(false)} />}
      {formVoluntarioVisivel && <Voluntario onClose={() => setFormVoluntarioVisivel(false)} />}
    </Router>
  );
}

export default App
