import React, { Component } from 'react';

const h3Style = {
  textAlign: 'center',
};

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <h3 style={h3Style}>Express, React, and Webpack Starter App</h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
