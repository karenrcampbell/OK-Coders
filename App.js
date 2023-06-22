import './App.css';
import Weather from './components/Weather';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="head">3-Day Weather Forecast</div>
        
        <p> 
          <Weather />
        </p>
      </header>
    </div>
  );
}

export default App;
