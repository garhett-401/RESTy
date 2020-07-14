import React from 'react';
import '../scss/main.scss'


class Main extends React.Component {
  
  colorPicker(event) {
    let box = document.getElementsById('update')
    box.style.borderColor = event.target.value;
  };


  render() {
    return (
      <section>
        <section class="main">
          <form class="form" onSubmit={this.props.handleSubmit}>
            <label>URL:</label>
            <input type="text" id="url" placeholder="URL" value={this.props.value} onChange={this.props.handleChange}></input>
            <input id="test" type="submit" value="GO!"></input>
            <br></br>
            <section class="methods">
              <ul>
                <li onClick={() => this.props.handleMethod('Get')} id="get">GET</li>
                <li onClick={() => this.props.handleMethod('POST')} id="post">POST</li>
                <li onClick={() => this.props.handleMethod('PUT')} id="put">PUT</li>
                <li onClick={() => this.props.handleMethod('DELETE')} id="delete">DELETE</li>
              </ul>
            </section>
          </form>
        </section>
        <section class="urlSection">
          <p id="update">
            {this.props.method} {this.props.value}
          </p>
        </section>
      </section>
    )
  }
}

export default Main;