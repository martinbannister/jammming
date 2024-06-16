import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

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
  
  return (
    <div className="App">
      <SearchBar />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
