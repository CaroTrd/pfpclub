import React, { Component } from 'react';

/* global fetch:false */

class Ambassador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      category: 'test',
      first_name: 'Jean',
      last_name: 'Louche',
    };
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => this.setState({ elements: data }));
  }

  render() {
    return (
      <div>
        <img src="" alt="" />
        <h1>{this.state.category}</h1>
        <h2>{this.state.first_name}</h2>
        <h2>{this.state.last_name}</h2>
        <h2>{this.state.elements.name}</h2>
      </div>
    );
  }
}
export default Ambassador;
