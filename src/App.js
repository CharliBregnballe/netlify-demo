import './App.css';
import Form from "./components/form"

function App() {
  return (
    <div className="App">
      <div className="imageContainer">
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/49863708d20857f3a07b8118/sddd-min.png" alt="music" />
      </div>
      <div className="content">
        <h1>Martin og Charlis liveband</h1>
        <p>Call me maybe? +45 61669876</p>
       
        <Form />
      </div>
    </div>
  );
}

export default App;
