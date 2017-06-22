import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Form, { Checkbox, Input, Radio, RadioGroup, Select, SelectOption } from 'reactor-blocks/package/components/form';
import Dropdown, { DropdownMenuItem, DropdownMenuHeader, DropdownMenuDivider } from 'reactor-blocks/package/components/dropdown';

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
      <Container id="playground">
        <Row>
          <Column>
            <Dropdown label="something" onMenuItemClick={(...args) => console.log(...args) }>
              <DropdownMenuItem value="a">a</DropdownMenuItem>
              <DropdownMenuItem value="b">b</DropdownMenuItem>
              <DropdownMenuItem value="c">c</DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuHeader>numbers</DropdownMenuHeader>
              <DropdownMenuItem value={1}>1</DropdownMenuItem>
              <DropdownMenuItem value={2}>2</DropdownMenuItem>
            </Dropdown>
            <Form onSubmit={this.handleStuff}>
              <Input placeholder="something" />
              <RadioGroup inline>
                <Radio label="select something" value="foo" />
                <Radio label="select something" value="bar" />
              </RadioGroup>
              <Select onChange={(...args) => console.log(...args) } placeholder="something">
                <SelectOption label="Foo" value="__FOO__" />
                <SelectOption label="Bar" value="__BAR__" />
              </Select>
            </Form>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
