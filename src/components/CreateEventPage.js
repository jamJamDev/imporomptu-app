import React from 'react';
import 'mui-react/dist/mui-react.css';
import {Button, Appbar, Container} from 'mui-react';


class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      date: '',
      location: '',
      description: '',
      contact: ''

      };

    this.handleInputChange = this.handleInputChange.bind(this);

  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });

  }


  render() {

    return (
      <div style={{border: "1px solid black", margin: "auto", width: "375px", padding: "10px 30px 10px 50px"}}>
      <h1>Add an Event</h1>
      <form>
        <label>
          Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
        </label> <br />
        < label >
         Tags:
          <input name="tags" type="text" value={this.state.tags} onChange={this.handleInputChange} />
        </label> <br />
          <label>
          Date:
          <input name="date" type="text" value={this.state.date} onChange={this.handleInputChange} />
        </label> <br />
        <label>
          Location:
          <input  name="location" type="text" value={this.state.location} onChange={this.handleInputChange} />
        </label> <br />
        <label>
          Description:
          <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
        </label> <br /> 
        <label>
          Contact Info:
          <input name="contact" type="text" value={this.state.contact} onChange={this.handleInputChange} />
        </label> <br />
        <input style={{backgroundColor:"#14ad24 ", outline:"none", color:"white"}} type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default CreateEvent