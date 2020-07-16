import React from 'react';

const Display = (props) => {

  if(!Object.keys(props.object).length)  {

    return (
      <p>GIMME SOME GOD DAMN POKEMON</p>
    )
  } else  {

  return(
    <section>             
        <pre>
          <code>
            {props.object}
          </code>  
        </pre>   
    </section>
    ) 
  }
}

export default Display