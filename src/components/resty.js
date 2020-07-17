import React from 'react'

import '../scss/main.scss'
import Engage from './restCall.js'
import RecentRequests from './recentRequests.js'
import Method from './method.js'

class Resty extends React.Component {


  render() {
    return (

      <>
        <section class="main" exact path="/resty">
          <section class="form">
            <form class="formField" onSubmit={this.props.handleSubmit}>
              <label>URL:</label>
              <input type="text" id="url" placeholder="URL" value={this.props.value} onChange={this.props.handleChange}></input>
              <button type="submit">GO!</button>
            </form>
          </section>

          <br />
          <br />

          <section class="methods">
            <Method
              handleMethod={this.props.handleMethod}
            />
          </section>

          <br />
          <br />

          <section className="displayBox">

            <section className="recentRequests">
              <RecentRequests
                history={this.props.history}
              />
            </section>

            <section className="urlSection">
              <Engage
                shortHistory={this.props.shortHistory}
                method={this.props.method}
                value={this.props.value}
                handleSubmit={this.props.handleSubmit}
                handleChange={this.props.handleObjectChange}
              />
            </section>

          </section>

        </section>
      </>
    )
  }
}

export default Resty;