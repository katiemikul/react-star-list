import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props); //if you always pass it in then you never have to think about it.  super is referring to the parent class Component

    this.state = { 
      user: 'Katie',
      city: 'Fridley'};

    //this in handleChange the same as this in the constructor
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {//method on our app class
    // console.log('input was changed');
    console.log('event.target', event.target.value);
    // this.state.user = event.target.value;

    this.setState({user: event.target.value});
    // this.setState({city: event.target.value});
  }

  cityHandleChange = (event) => {
    console.log('event.target', event.target.value);
    this.setState({city: event.target.value});
  }

  logInfo = (event) => {
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        The current user is {this.state.user}
        <input onChange={this.handleChange} placeholder="User Name"/>
        and lives in {this.state.city}
        <input onChange={this.cityHandleChange} placeholder="City"/>
        <button onClick={this.logInfo}>Submit</button>
      </div>
    );
  }
}

export default App;
