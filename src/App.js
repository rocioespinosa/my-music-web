import "./App.css";
import SideBar from "././components/sideBar";
import MusicPlayer from "././components/bottomBar";
import LandingPage from "./components/landingPage";
import RightSideBar from "./components/rightSideBar";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(35, 33, 33);",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar />
          <LandingPage />
          <div className="rightsidebar-container">
            <RightSideBar />{" "}
          </div>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
