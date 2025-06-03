import Header from '@components/Header/header-section';
import HeaderFeaturedMessage from '@components/Header/header-hero-section';
import Main from '@components/Main/main-section';
import Aside from '@components/Aside/aside-section';
import SpotifyCard from '@components/Aside/aside-spotify-card';
import Footer from '@components/Footer/footer-section';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeaderFeaturedMessage />
      <div className='cards-grid-wrapper'>
        <Main />
        <div className='aside-container'>
          <Aside />
          <SpotifyCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
