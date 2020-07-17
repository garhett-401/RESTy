import React from 'react'

class Archive extends React.Component {


  render() {
    console.log(this.props.archive)
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />

        <section>

          <section>
            {this.props.archive.map((val) => {
              return (
                <>

                  <h4>
                    {val.status}{val.method}
                  </h4>
                  <h6>
                    {val.object}
                  </h6>
                  <br />

                </>

              )
            })}
          </section>



        </section>
      </>
    )
  }
}

export default Archive;