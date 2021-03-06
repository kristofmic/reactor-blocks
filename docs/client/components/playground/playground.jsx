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
import { Checkbox } from 'reactor-blocks/package/components/form';

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
        <Navbar position="fixed-top" expandSize="lg">
          <NavbarBrand onClick={this.handleStuff}>
            Brand
          </NavbarBrand>
          <NavbarToggler />
          <NavbarCollapse>
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
              <Button className="d-block" onClick={this.props.showModal}>Toggle Modal</Button>
            </Column>
          </Row>
        </Container>
        <Modal onDismiss={this.props.hideModal} show={this.props.isModalVisible}>
          <ModalBody>
            modal body
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default modalHOC(Playground);
