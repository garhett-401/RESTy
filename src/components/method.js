import React from 'react';


class Method extends React.Component {
  
  render()  {

    return (
      <ul>
        <li onClick={() => this.props.handleMethod('GET')} id="get">GET</li>
        <li onClick={() => this.props.handleMethod('POST')} id="post">POST</li>
        <li onClick={() => this.props.handleMethod('PUT')} id="put">PUT</li>
        <li onClick={() => this.props.handleMethod('DELETE')} id="delete">DELETE</li>
      </ul>
    )
  }
}

export default Method;