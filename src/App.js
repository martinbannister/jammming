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
  
  const [playlist, setPlaylist] = useState({ name: 'playlist', tracks: [] });
  
  const addToPlaylist = newTrack => {
    const exists = playlist.tracks.some( track => newTrack.id === track.id);
    
    const newPlaylist = {
      ...playlist,
      tracks: [...playlist.tracks, newTrack]
    };
    
    if (!exists) {
      setPlaylist(newPlaylist);
      /*
      setPlaylist( (prevPlaylist) => {
      {...prevPlaylist, tracks: [...prevPlaylist.tracks, newTrack]}
      }); */
    } //[newTrack, ...prevPlaylist]);
    console.log(playlist);
  };
  
  const takeFromPlaylist = playlistItem => {
    setPlaylist( prevPlaylist => prevPlaylist.filter( track => {
      return track.id != playlistItem.id;
    }));
  };
  
  return (
    <div className="App">
      <SearchBar />
      <SearchResults searchResults={searchResults} onAddToPlaylist={addToPlaylist} />
      <Playlist data={playlist} onTakeFromPlaylist={takeFromPlaylist} />
    </div>
  );
}

export default App;
