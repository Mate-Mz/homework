import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Portfolio</h1>
      </header>
      <div className="content">
      
        <div>
          <h2>About</h2>
          <div class= "about">
            <img src="https://e0.pxfuel.com/wallpapers/35/175/desktop-wallpaper-god-of-war-kratos-face.jpg" alt=""></img>
            <p>
              I need a job. <br></br>
              Achievements: <br></br>
              lowered the population of gods of Olympus to 0%<br></br>
              Lowered the population of Aesir to 1%<br></br>
            </p>
          </div>
        </div>

        <div class="scroller-container">
          <h1>Projects:</h1>
          <div class="projects">
            <div class="project"><a>The Defeat of Ares</a></div>
            <div class="project"><a>The Slaying of the Hydra</a></div>
            <div class="project"><a>The Puzzle-solving Prowess</a></div>
            <div class="project"><a>Journey to the Fates</a></div>
            <div class="project"><a>The Travel to Different Realms</a></div>
            <div class="project"><a>The Journey with Atreus</a></div>
            <div class="project"><a>The Battle against Baldur</a></div>
            <div class="project"><a>The Battle with Thor:</a></div>
          </div>
        </div>

      </div>

      <footer className="App-footer">
        <div class = "contanct">
          <h2>Contact Me</h2>
          <p>Email: godSlayer111@gmail.com</p>
          <p>Phone: 555 555 555</p>
        </div>
        <p>&copy; 202. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
