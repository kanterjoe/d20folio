import React, { Component } from "react";
import logo from "./d20-folio-logo-1.png";
import {Jumbotron} from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom'
import NavigationBar from './components/Navbar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Route exact path="/" component={() => <div>Hello WOrld</div>} />
          <Route exact path="/mychars" component={() => <div>myChars</div>} />
          <Route exact path="/new" component={() => <div>New</div>} />
          <Route exact path="/edit/:id" component={({match}) => <div>Editing {match.params.id}</div>} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
