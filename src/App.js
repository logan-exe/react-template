import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Left from "./components/Left";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <center style={{ backgroundColor: "#f4f4f4", padding: "24px" }}>
          <Nav />
        </center>
        <div style={{ display: "flex" }}>
          {" "}
          <Left />
          <Switch>
            <Route path="/" exact>
              this is home
            </Route>

            <Route path="/page2">
              <div style={{ margin: "auto" }}>
                <h1>This is page 2</h1>
              </div>
            </Route>
            <Route path="/page3">this is page 3</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
