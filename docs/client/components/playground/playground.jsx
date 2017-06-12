import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button, { ButtonGroup } from 'reactor-blocks/package/components/button';
import Loading from 'reactor-blocks/package/components/loading';

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
            <ButtonGroup>
              <Button type="secondary" onClick={this.handleStuff}>1</Button>
              <Button type="secondary" onClick={this.handleStuff}>2</Button>
              <Button type="secondary" onClick={this.handleStuff}>3</Button>
              <Button type="secondary" onClick={this.handleStuff}>4</Button>
            </ButtonGroup>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
