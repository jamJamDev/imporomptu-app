import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'mui-react/dist/mui-react.css';
import {Appbar,Container,Button} from 'mui-react';

class EnterEmail extends Component {

  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Welcome! Your account has been created!' + this.state.value);
    event.preventDefault();
  }
textAlign: "center"
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{padding:0}}>

        <div style={{padding:10}}>
          <label style={{padding:10}}>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>

        <div style={{padding:10}}>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
          <Button type="submit" value="Create Account" style={{backgroundColor:"#14ad24 ", outline:"none", color:"white"}}>Create Account</Button>
      </form>
    );
  }
}


export default EnterEmail;
