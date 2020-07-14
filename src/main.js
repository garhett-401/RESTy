import React from 'react';
import './main.scss'

class Main extends React.Component {


  render() {
    return (
      <section>
        <section class="main">
          <form class="form" onSubmit={this.props.handleSubmit}>
            <label>URL:</label>
            <input type="text" id="url" placeholder="URL" value={this.props.value} onChange={this.props.handleChange}></input>
            <input type="submit" value="GO!"></input>
            <br></br>
            <section class="methods">
              <ul>
                <li onClick={() => this.props.handleMethod('Get')}>GET</li>
                <li onClick={() => this.props.handleMethod('POST')}>POST</li>
                <li onClick={() => this.props.handleMethod('PUT')}>PUT</li>
                <li onClick={() => this.props.handleMethod('DELETE')}>DELETE</li>
              </ul>
            </section>
          </form>
        </section>
        <section class="urlSection">
          <p class="update">
            {this.props.method} {this.props.value}
          </p>
        </section>
      </section>
    )
  }
}

export default Main;