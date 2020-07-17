import React from 'react';
import Display from './displayApi.js'

class Engage extends React.Component  {

  render()  {

    return (
      <>
        <br/>
        <br/>

        <p id="update">
          {this.props.method} {this.props.value}
        </p>
        <br/>
        <br/>
        <Display
        shortHistory={this.props.shortHistory}
        />
       
      </>
    )
  }
}

export default Engage