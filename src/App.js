import "./App.css";
import SideBar from "././components/sideBar";
import MusicPlayer from "././components/bottomBar";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "pink",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar />;
          <LandingPage />;
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
