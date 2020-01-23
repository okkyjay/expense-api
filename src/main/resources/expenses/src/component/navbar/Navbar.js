import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export default class Example extends React.Component {
    state = {}

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Expenses Tracker Application</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/categories">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/expenses">Expenses</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}