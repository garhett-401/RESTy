import React from 'react'
import '../scss/main.scss'


class Recent extends React.Component  {
  


  render() {
    return (
      <>
        <h2>
          Recent REST Actions
        </h2>
        <br/>
        <br/>
        <ul className="recentLi">
          {this.props.history.map((val, idx) => {
            return (
              <>
                <li key={idx}>
                  <h4>
                  {val.status}{val.method}
                  </h4>
                  <h6>
                  {val.url}
                  </h6>
                  <br/>
                </li>
              </>

            )
          })}
        </ul>
      </>
    )
  }
}

export default Recent