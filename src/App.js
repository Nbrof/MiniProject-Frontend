import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="App">
      <h1>TUNR.</h1>
      <br></br>
      <h3>FOR ALL YOU PLAYLIST NEEDS</h3>
      <hr className="red-line"></hr>
    </div>
  );
}

export default App;
