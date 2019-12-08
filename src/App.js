import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor (props){
  super(props)
  this.state = {
    change: {
      dollars:null,
      halfDollars: null,
      quarters: null,
      dimes:null,
      nickels:null,
      pennies:null
    },
    amount:''

  }
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this)
}

handleChange(event) {
  this.setState({amount: event.target.value});
}


handleClick (event) {
  axios.post('http://localhost:8080/'+this.state.amount,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(response =>{
    this.setState({change: response.data});
    console.log(this.state.change.dollars);
  });
  }

  render () {
    return (
      <div className='body'>

        <div>
          <p>Please the the amount you wish to tender for change</p>
          <label>
            Amount:
          <input type="amount" value={this.state.amount} onChange={this.handleChange} name="amount" />
          </label>
          <button type="button" onClick={this.handleClick} >Submit</button>

          <p>Your Optimal Change in coins iabelow</p>
          <p>You will recieve {this.state.change.dollars} dollar coins</p>
          <p>You will recieve {this.state.change.halfDollars} hald dollars coins</p>
          <p>You will recieve {this.state.change.quarters} quarters</p>
          <p>You will recieve {this.state.change.dimes} dimes</p>
          <p>You will recieve {this.state.change.nickels} nickels</p>
          <p>You will recieve {this.state.change.pennies} pennies</p>


        </div>
      </div>

    )
  }
}

export default App;
