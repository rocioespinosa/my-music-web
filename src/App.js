import "./App.css";
import SideBar from "././components/sideBar";
import MusicPlayer from "././components/bottomBar";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <div>
      <div className="side-bar-container">
        <SideBar />;
      </div>
      <div>
        <LandingPage />;
      </div>
      <div className="player-container">
        {" "}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
