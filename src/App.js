import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
