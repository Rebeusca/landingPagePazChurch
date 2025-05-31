import Header from './components/header-section';
import Main from './components/main-section';
import Aside from './components/aside-section';
import SpotifyCard from './components/aside-spotify-card';
import Footer from './components/footer-section';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
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
