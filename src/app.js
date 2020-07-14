import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js'
import Footer from './components/footer.js'



// create our component, what makes something a React Component
// it must return JSX
class App extends React.Component {
  constructor() {
    super();
    // Each component has it's own state
    this.state = {
      value: '',
      method: '',
    };

    // we must bind methods (not defined with fat arrow functions to the React.Components "this")
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleStateWords(words) {
    this.setState({ words });
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleMethod(method)  {
    this.setState({method})
  }

  render() {

    return (
      <div>
        <Header
        />

        <Main
          value={this.state.value}
          handleMethod={this.handleMethod}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          method={this.state.method}
        />

        <Footer
        />
      </div>
    );
  }
}


export default App;
