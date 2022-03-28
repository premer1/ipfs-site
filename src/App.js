import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      
       <h1>CoinView | Countdown</h1>

<div id="countdown" class="countdown">
  <div class="time">
    <h2 id="days"></h2>
    <small>Days</small>
  </div>

  <div class="time">
    <h2 id="hours"></h2>
    <small>hours</small>
  </div>

  <div class="time">
    <h2 id="minutes"></h2>
    <small>Minutes</small>
  </div>

  <div class="time">
    <h2 id="seconds"></h2>
    <small>Seconds</small>
  </div>
</div>
    </div>
  );
}

export default App;
