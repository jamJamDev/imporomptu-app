import React from 'react';
import 'mui-react/dist/mui-react.css';
import {Button, Appbar, Container} from 'mui-react';


class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      location: '',
      description: '',
      contact: ''

      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
   
    this.setState({title: event.target.title});
    this.setState({date: event.target.tags}); 
    this.setState({date: event.target.date}); 
    this.setState({location: event.target.location});
    this.setState({description: event.target.description});
    this.setState({contact: event.target.contact});
  }

  handleSubmit(event) {
    console.log(this.state.date);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{border: "1px solid black", margin: "auto", width: "375px", padding: "10px 30px 10px 50px"}}>
      <h1>Add an Event</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input id="input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label> <br />
        < label >
         Tags:
          <input id="input" name="tags" type="text" value={this.state.tags} onChange={this.handleChange} />
        </label> <br />
          <label>
          Date:
          <input name="date" type="text" value={this.state.date} onChange={this.handleChange} />
        </label> <br />
        <label>
          Location:
          <input  name="location" type="text" value={this.state.location} onChange={this.handleChange} />
        </label> <br />
        <label>
          Description:
          <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
        </label> <br /> 
        <label>
          Contact Info:
          <input name="contact" type="text" value={this.state.contact} onChange={this.handleChange} />
        </label> <br />
        <input style={{backgroundColor:"#14ad24 ", outline:"none", color:"white"}} type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default CreateEvent