import React from 'react';
import { BrowserRouter, Route, NavLink as Link } from 'react-router-dom'

import Header from './components/header.js';
import Main from './components/main.js'
import Footer from './components/footer.js'
import Archive from './components/archive.js'




// create our component, what makes something a React Component
// it must return JSX
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      archive: [],
    }
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  async handleLocalStorage() {
    let local = await localStorage.getItem('archive');
    let data = await JSON.parse(local)
    if (data.length) {
      await this.setState({ archive: data })
    }

  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <Header
          />
          <nav className="nav">
            <Link className="select" exact to="/RESTy" >Home!</Link>
            <Link className="select" exact to="/RESTy/history"onClick={this.handleLocalStorage}>History!</Link>
          </nav>

          <Route exact path="/RESTy">
          <Main 
            archive={this.state.archive}
          />
          </Route>

          <Route exact path="/RESTy/history">
            <Archive 
              archive = {this.state.archive}
            />
          </Route>



          <Footer
          />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
