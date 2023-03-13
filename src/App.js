import './tasfiha_saba.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={require("./tasfiha_saba.jpg")} 
          className="App-logo" 
          alt="logo" 
          style={{width: "50%", height: "auto"}} // Add this line to resize the image
        />
        <p>
          My name is Tasfiha Saba, and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/tasfihasaba"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
