import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "./style.css";

const logo = require("../../d20-folio-logo-1.png");

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" light expand="md">
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="d20folio"
              style={{ width: 50, margin: 5, padding: 2 }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mychars">My Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/new">Add Character</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://github.com/kanterjoe/d20folio"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
