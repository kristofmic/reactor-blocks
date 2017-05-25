import React from 'react';

if (process.env.BROWSER) {
  require('./playground.scss');
}

class Playground extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleStuff = this.handleStuff.bind(this);
  }

  handleStuff(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div id="playground">
        <h6>Hello World</h6>
      </div>
    );
  }
}

export default Playground;
