import './App.css';
import SearchBar from '../SearchBar/SearchBar';

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
        </div>
      </body>
    </div>
  );
}

export default App;
