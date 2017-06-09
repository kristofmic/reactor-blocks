import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
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
      value: !this.state.value
    });
  }

  render() {
    return (
      <Container id="playground">
        <Row>
          <Column>
            <Button type="primary" onClick={this.handleStuff} loading={this.state.value}>Primary</Button>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
