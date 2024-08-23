import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './features/NavBar';
import HomePage from './features/HomePage';
import Podcast from './features/Podcast';
import OtherPage from './features/OtherPage';
import SpotifyPlayer from './features/SpotifyPlayer';

const App = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast" element={<Podcast playingTrack={playingTrack} setPlayingTrack={setPlayingTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />} />
        <Route path="/otherPage" element={<OtherPage />} />
      </Routes>
      {playingTrack && <SpotifyPlayer trackUri={playingTrack} isPlaying={isPlaying} />}
    </Router>
  );
}

export default App;
