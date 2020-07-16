import React from 'react';
import Display from './displayApi.js'

class Engage extends React.Component  {

  render()  {

    return (
      <section>
        <br/>
        <br/>
        <section class="urlSection">
          <p id="update">
            {this.props.method} {this.props.value}
          </p>
          <br/>
          <br/>
          <Display
          object = {this.props.object}
          />
        </section>
      </section>
    )
  }
}

export default Engage