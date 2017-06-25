import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
import Nav, { NavDropdown, NavItem, NavLink } from 'reactor-blocks/package/components/nav';
import Dropdown, { DropdownMenuItem } from 'reactor-blocks/package/components/dropdown';
import Tabs, { Tab } from 'reactor-blocks/package/content/tabs';

if (process.env.BROWSER) {
  require('./playground.scss');
}

const styles = {

};

class Playground extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '1',
    };

    this.handleStuff = this.handleStuff.bind(this);

    // setInterval(() => {
    //   this.handleStuff();
    // }, 5000);
  }

  handleStuff(id) {
    this.setState({
      value: id,
    });
  }

  render() {
    return (
      <Container id="playground">
        <Row>
          <Column>
            <Nav type="tabs">
              <NavItem>
                <NavLink active={this.state.value === '1'} href="1" onClick={this.handleStuff}>Tab 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.state.value === '2'} href="2" onClick={this.handleStuff}>Tab 2</NavLink>
              </NavItem>
              <NavItem>
                <NavDropdown
                  label="Dropdown"
                  link
                  active={this.state.value === "3" || this.state.value === "4"}
                  onMenuItemClick={this.handleStuff}
                >
                  <DropdownMenuItem value="3">Tab 3</DropdownMenuItem>
                  <DropdownMenuItem value="4">Tab 4</DropdownMenuItem>
                </NavDropdown>
              </NavItem>
            </Nav>
          </Column>
        </Row>
        <Row>
          <Column>
            <Tabs activeTab={this.state.value}>
              <Tab value="1">
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </Tab>
              <Tab value="2">
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
              </Tab>
              <Tab value="3">
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
              </Tab>
              <Tab value="4">
                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.
              </Tab>
            </Tabs>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
