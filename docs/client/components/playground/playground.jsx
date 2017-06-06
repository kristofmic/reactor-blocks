import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';

if (process.env.BROWSER) {
  require('./playground.scss');
}

const styles = {
  column: {
    backgroundColor: 'rgba(0, 0, 0, .09)',
    border: '1px solid rgba(0, 0, 0, .12)',
  },
};

class Playground extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleStuff = this.handleStuff.bind(this);
  }

  handleStuff(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <Container id="playground">
        <Row>
          <Column style={styles.column}>col-1</Column>
          <Column style={styles.column}>col-2</Column>
          <Column newLine />
          <Column style={styles.column}>col-3</Column>
          <Column style={styles.column}>col-4</Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
