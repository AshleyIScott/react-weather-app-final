import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> weather app 🌤</h1>

      <footer>
        coded by
        <a
          href="https://github.com/AshleyIScott"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Ashley Irving-Scott{" "}
        </a>
        ◇ open-sourced on
        <a
          href="https://github.com/AshleyIScott/ReactWeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        ◇ hosted on
        <a
          href="https://main--dashing-trifle-8edf30.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
