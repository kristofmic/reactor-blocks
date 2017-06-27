import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
import Nav, { NavDropdown, NavItem, NavLink } from 'reactor-blocks/package/components/nav';
import Dropdown, { DropdownMenuItem } from 'reactor-blocks/package/components/dropdown';
import Tabs, { Tab } from 'reactor-blocks/package/content/tabs';
import Navbar, { NavbarBrand, NavbarCollapse, NavbarNav, NavbarText, NavbarToggler, navbarToggleHOC } from 'reactor-blocks/package/components/navbar';

if (process.env.BROWSER) {
  require('./playground.scss');
}

const styles = {

};

class Playground extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.handleStuff = this.handleStuff.bind(this);

    // setInterval(() => {
    //   this.handleStuff();
    // }, 5000);
  }

  handleStuff() {
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    return (
      <div>
        <Navbar toggleSize="md" type="faded">
          <NavbarBrand href="#">
            Brand
          </NavbarBrand>
          <NavbarToggler />
          <NavbarCollapse>
            <NavbarNav className="mr-auto">
              <NavItem>
                <NavLink active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
              <NavItem>
                <NavDropdown
                  label="Navbar Dropdown"
                  onMenuItemClick={this.handleStuff}
                >
                  <DropdownMenuItem value="3">Tab 3</DropdownMenuItem>
                  <DropdownMenuItem value="4">Tab 4</DropdownMenuItem>
                </NavDropdown>
              </NavItem>
            </NavbarNav>
            <NavbarText>
              Navbar text
            </NavbarText>
          </NavbarCollapse>
        </Navbar>
        <Container id="playground">
          <Row>
            <Column>
              <Tabs activeTab>
                <Tab value="1">
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                </Tab>
              </Tabs>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default navbarToggleHOC(Playground);
