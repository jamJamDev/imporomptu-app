import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

class NameForm extends React.Component {
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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    
  }

  render() {
    return (
    	<div>
    	<h1>Add an Event</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label> < br /> 
          <label>
          Date/Time:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>  < br /> 
        <label>
          Location:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>  < br /> 
        <label>
          Description:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>  < br /> 
        <label>
          Contact Info:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>  < br /> 
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);