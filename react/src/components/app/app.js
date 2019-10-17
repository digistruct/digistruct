import React, { useState } from 'react'
import Counter from '../counter/counter.js'
import Home from '../home/home.js'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <BrowserRouter>

        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">digistruct</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/counter">counter</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App
