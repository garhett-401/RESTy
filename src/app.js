import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js'
import Footer from './components/footer.js'



// create our component, what makes something a React Component
// it must return JSX
class App extends React.Component {


  render() {

    return (
      <div>
        <Header
        />

        <Main
        />

        <Footer
        />
      </div>
    );
  }
}


export default App;
