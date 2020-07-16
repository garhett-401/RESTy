import React from 'react';
import '../scss/main.scss'
import Engage from './restCall.js'

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      method: 'GET',
      object: '',
    }

    // we must bind methods (not defined with fat arrow functions to the React.Components "this")
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleObjectChange = this.handleObjectChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();

    switch (this.state.method) {
      case 'GET':
        let api = this.state.value;
        let data = await fetch(`${api}`);
        let json = await data.json();
        let apiData = JSON.stringify(json, null, 2)
        this.handleObjectChange(apiData)
        break;

      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        console.log('Error')
        break;
    }
  }

  handleMethod(method) {
    this.setState({ method })
  }

  handleObjectChange(objectInput) {
    this.setState({ object: objectInput })
  }

  render() {

    return (
      <section class="main">
        <section class="form">
          <form class="formField" onSubmit={this.handleSubmit}>
            <label>URL:</label>
            <input type="text" id="url" placeholder="URL" value={this.value} onChange={this.handleChange}></input>
            <button type="submit">GO!</button>
          </form>
        </section>

        <br />
        <br />

        <section class="methods">
          <ul>
            <li onClick={() => this.handleMethod('GET')} id="get">GET</li>
            <li onClick={() => this.handleMethod('POST')} id="post">POST</li>
            <li onClick={() => this.handleMethod('PUT')} id="put">PUT</li>
            <li onClick={() => this.handleMethod('DELETE')} id="delete">DELETE</li>
          </ul>
        </section>
        
        <br />
        <br />

        <section id="displayBox">
          <Engage
            method={this.state.method}
            value={this.state.value}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleObjectChange}
            object={this.state.object}
          />
        </section>
        
      </section>
    )
  }
}

export default Main;