import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from "./components/MainView";
import Direct from "./components/Direct";
import Explore from "./components/Explore";
import Saved from "./components/Saved";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
          <MainView/>
      </Route>
      <Route path="/direct/inbox">
          <Direct/>
      </Route>
      <Route path="/explore">
          <Explore/>
      </Route>
      <Route path="/account/activity">
          <Saved/>
      </Route>
      <Route path="/account">
          <Profile/>
      </Route>
    </Router>
  );
}

export default App;
