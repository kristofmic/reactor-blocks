import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
import Nav, { NavDropdown, NavItem, NavLink } from 'reactor-blocks/package/components/nav';
import Dropdown, { DropdownMenuItem } from 'reactor-blocks/package/components/dropdown';
import Tabs, { Tab } from 'reactor-blocks/package/content/tabs';
import Navbar, { NavbarBrand, NavbarCollapse, NavbarNav, NavbarText, NavbarToggler } from 'reactor-blocks/package/components/navbar';
import Popover, { PopoverWrapper, popoverHOC } from 'reactor-blocks/package/components/popover';
import Modal, { ModalBody, modalHOC } from 'reactor-blocks/package/components/modal';
import Tooltip, { TooltipWrapper } from 'reactor-blocks/package/components/tooltip';

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
        <Navbar position="fixed-left" toggleSize="none">
          <NavbarBrand onClick={this.handleStuff}>
            Brand
          </NavbarBrand>
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
        </Navbar>
        <Container id="playground">
          <Row>
            <Column>
              <Button icon="fa fa-check" loading={this.state.value} onClick={this.handleStuff} size="sm"/>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default popoverHOC(Playground);
