import React, { Component } from "react";
import logo from "./d20-folio-logo-1.png";
import { Jumbotron } from "reactstrap";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import ViewAllCharacters from "./pages/ViewAllCharacters";
import EditCharacter from "./pages/EditCharacter";
import ViewMyCharacters from "./pages/ViewMyCharacters";
import {SignupPage, LoginPage} from './pages/Auth'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <div className="main">
            <Route exact path="/" component={() => <ViewAllCharacters />} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/mychars" component={ViewMyCharacters} />
            <Route
              exact
              path="/new"
              component={() => <EditCharacter new={true} />}
            />
            <Route
              exact
              path="/edit/:id"
              component={({ match }) => <div>Editing {match.params.id}</div>}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
