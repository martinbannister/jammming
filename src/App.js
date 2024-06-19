import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState(
    [
  {
    name: 'Supervixen',
    artist: 'Garbage',
    album: 'Garbage',
    id: 1
  },
  {
    name: 'Milk',
    artist: 'Garbage',
    album: 'Garbage',
    id: 2
  },
  {
    name: 'Stupid Girl',
    artist: 'Garbage',
    album: 'Garbage',
    id: 3
  },
  {
    name: 'When I Grow Up',
    artist: 'Garbage',
    album: 'Version 2',
    id: 4
  }
]
  );
  
  const [playlist, setPlaylist] = useState([]);
  
  const addToPlaylistHandler = newTrack => {
    const exists = playlist.some( track => newTrack.id === track.id);
    if (!exists) setPlaylist( prevPlaylist => [newTrack, ...prevPlaylist]);
  };
  
  const takeFromPlaylist = playlistItem => {
    setPlaylist( prevPlaylist => prevPlaylist.filter( track => {
      return track.id != playlistItem.id;
    }));
  };
  
  return (
    <div className="App">
      <SearchBar />
      <SearchResults searchResults={searchResults} onAddToPlaylist={addToPlaylistHandler} />
      <Playlist data={playlist} onTakeFromPlaylist={takeFromPlaylist} />
    </div>
  );
}

export default App;
