import React from 'react';

import { Column, Container, Row } from 'reactor-blocks/package/layout/grid';
import Dropdown from 'reactor-blocks/package/components/dropdown';

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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Dropdown
              type="primary"
              menuItems={[
                { id: 'h1', label: 'heading 1', type: 'header' },
                { id: 1, label: 'item 1' },
                { id: 2, label: 'item 2' },
                { id: 'd1', type: 'divider' },
                { id: 3, label: 'item 3' },
                { id: 4, label: 'item 4', disabled: true },
              ]}
              onMenuItemClick={(id) => { console.log(id); }}
            >
              Dropdown button
            </Dropdown>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Playground;
