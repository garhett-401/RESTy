import React from 'react';

const Display = (props) => {

  if(!Object.keys(props.shortHistory.object).length)  {

    return (
      <p>GIMME SOME GOD DAMN POKEMON</p>
    )
  } else  {

  return(
    <>       
        <pre>
          <h5>
            Headers
          </h5>
          <code>
            {props.shortHistory.headers}
          </code>
        </pre>      
        <pre>
          <h5>
            Body
          </h5>
          <code>
            {props.shortHistory.object}
          </code>  
        </pre>   
    </>
    ) 
  }
}

export default Display