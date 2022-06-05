import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Convoy from "./Components/Convoy";
import Discord from "./Components/Discord";
import Footer from "./Components/Footer";
import Header  from "./Components/Header";
import JoinUs from "./Components/JoinUs";
import MiniHeader from "./Components/MiniHeader";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import "./styles.scss";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import About from "./Components/About";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/join-us">
            <MiniHeader />
            <JoinUs />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Header />
            <About />
            <Discord />
            <Convoy />
            <Team />
              <Route exact path="/login">
                <LoginForm />
              </Route>
          </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
    /* Support for GH Pages */
    /*<Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/janeks-convoys-community/join-us">
          <MiniHeader />
          <JoinUs />
        </Route>
        <Route exact path="/janeks-convoys-community/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Header />
          <About />
          <Discord />
          <Convoy />
          <Team />
        </Route>
        </Switch>
      <Footer />
    </div>
  </Router>*/
  );
}

export default App;
