import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Button from 'reactor-blocks/package/components/button';
import Modal, { ModalHeader, ModalFooter, ModalBody } from 'reactor-blocks/package/components/modal';

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
            <Button onClick={this.handleStuff}>
              Show modal
            </Button>
            <Modal onDismiss={this.handleStuff} show={this.state.value}>
              <ModalHeader onDismiss={this.handleStuff} title="Modal title" />
              <ModalBody>
                <p>Woohoo, text in a modal!</p>
              </ModalBody>
              <ModalFooter
                primaryLabel="Save changes"
                primaryOnClick={this.handleStuff}
                secondaryLabel="Close"
                secondaryOnClick={this.handleStuff}
              />
            </Modal>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
