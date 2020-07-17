import React from 'react';
import '../scss/main.scss'
import Resty from './resty.js'


class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      method: 'GET',
      history: [],
      shortHistory: {
        status: 500,
        method: '',
        url: '',
        headers: '',
        object: '',
      }
    }

    this.handleHistory = this.handleHistory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveStorage = this.handleSaveStorage.bind(this)
  }

  async handleSaveStorage() {
    localStorage.setItem('archive', JSON.stringify(this.state.history))
  }

  handleHistory(data, apiData) {
    let info = {
      status: data.status,
      method: this.state.method,
      url: data.url,
      headers: data.headers,
      object: apiData,
    }
    this.setState({ shortHistory: info })
    this.setState({ history: this.state.history.concat(this.state.shortHistory) })
    this.handleSaveStorage()
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
        this.handleHistory(data, apiData)
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

  render() {

    return (

          <Resty
            value={this.state.value}
            method={this.state.method}
            history={this.state.history}
            shortHistory={this.state.shortHistory}
            handleChange={this.handleChange}
            handleHistory={this.handleHistory}
            handleMethod={this.handleMethod}
            handleSubmit={this.handleSubmit}
            handleSaveStorage={this.handleSaveStorage}
          />
    )
  }
}

export default Main;