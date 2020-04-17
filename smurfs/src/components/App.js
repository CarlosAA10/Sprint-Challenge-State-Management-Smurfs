import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'; 

import SmurfList from './SmurfList'; 

import { fetchSmurfs, sendSmurfs } from '../store/actions/smurfActions'; 


class App extends Component {
  constructor(props) {
    super(props)
    // local state to update on form
    this.state = {
      name: '', 
      age: '' , 
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs(); 
  }

  handleChanges = (event) => {
    event.persist(); 
    const newSmurf = {
      ...this.state, 
      [event.target.name]: event.target.value
    }
    this.setState(newSmurf); 
  }; 

  formSubmit = event => {
    event.preventDefault(); 
    this.props.sendSmurfs(this.state); 
  }


  render() {
    console.log('this is props', this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <SmurfList />
        </div><br/><br/>
        <div>
          <form onSubmit={this.formSubmit}>
            <label htmlFor='name'>
              Name: 
              <input 
              type='text'
              id='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChanges}
              />
            </label><br/><br/>

            <label htmlFor='age'>
              Age: 
              <input
              type='text'
              id='age'
              name='age'
              value={this.state.age}
              onChange={this.handleChanges}
              />
            </label><br/><br/>

            <label htmlFor='height'>
              Height: 
              <input 
              type='text'
              id='height'
              name='height'
              value={this.state.height}
              onChange={this.handleChanges}
              />
            </label><br/><br/>

            <button>Submit Smurf</button>

          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    smurfInfo: state.smurfs.smurfInfo, 
    isFetching: state.smurfs.isFetching, 
    isSending: state.smurfs.isSending,
    error: state.smurfs.error
  }
}

export default connect(
  mapStateToProps, 
  { fetchSmurfs, sendSmurfs }
)(App);
