import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <header class="App-header-container">
        <h1 class="App-header">Jammming</h1>
      </header>
      <body>
        <div class="App-container">
          <div>
            <SearchBar />
          </div>
          <div class="break"></div>
          <div>
            <SearchResults />
          </div>
          <div>
            <Playlist />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
