import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Alert from 'reactor-blocks/package/components/alert';
import Blockquote from 'reactor-blocks/package/content/blockquote';

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
            <Alert dismissable onDismiss={() => { console.log('alert dismissed'); }}>
              <strong>Oops!</strong> Something went wrong. <a className="foobar" href="#">Click here</a> to fix the issue.
            </Alert>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
