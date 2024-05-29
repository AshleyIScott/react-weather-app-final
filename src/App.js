import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />

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
            href="https://github.com/AshleyIScott/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>
          ◇ hosted on
          <a
            href="https://reactweatherappfinal.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
