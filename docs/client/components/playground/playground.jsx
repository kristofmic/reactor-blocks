import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Media from 'reactor-blocks/package/layout/media';

if (process.env.BROWSER) {
  require('./playground.scss');
}

const styles = {

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
          <Column>
            <Media
              heading="This is fun"
              imageAlt="Orange splat"
              imageSource="https://lh3.googleusercontent.com/2GAFZ6MSEsgrek0vSERZ-QP0jTLZu6qAeDLhuemyP-vUnBiXGnttfg8nrBpkp_BSr4uS=w300"
              imageStyle={{ width: '64px', border: '1px solid black' }}
            >
              Lorem ipsum
            </Media>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
