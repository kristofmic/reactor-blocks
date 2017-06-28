import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
import Nav, { NavDropdown, NavItem, NavLink } from 'reactor-blocks/package/components/nav';
import Dropdown, { DropdownMenuItem } from 'reactor-blocks/package/components/dropdown';
import Tabs, { Tab } from 'reactor-blocks/package/content/tabs';
import Navbar, { NavbarBrand, NavbarCollapse, NavbarNav, NavbarText, NavbarToggler, navbarToggleHOC } from 'reactor-blocks/package/components/navbar';
import Pagination, { PageItem } from 'reactor-blocks/package/components/pagination';

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
        <Navbar toggleSize="md" theme="inverse" type="inverse">
          <NavbarBrand onClick={this.handleStuff}>
            Brand
          </NavbarBrand>
          <NavbarToggler active={this.props.isMenuVisible} horizontalPosition="right" onClick={this.props.toggleMenu} />
          <NavbarCollapse show={this.props.isMenuVisible}>
            <NavbarNav>
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
            </NavbarNav>
          </NavbarCollapse>
        </Navbar>
        <Container id="playground">
          <Row>
            <Column>
              <Tabs activeTab="1">
                <Tab value="1">
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                </Tab>
              </Tabs>
            </Column>
          </Row>
          <Row>
            <Column>
              <Pagination horizontalAlignment="center">
                <PageItem disabled><i className="fa fa-angle-double-left"/></PageItem>
                <PageItem>1</PageItem>
                <PageItem active>2</PageItem>
                <PageItem>3</PageItem>
                <PageItem><i className="fa fa-angle-double-right"/></PageItem>
              </Pagination>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default navbarToggleHOC(Playground);
