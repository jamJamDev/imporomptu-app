import React from 'react';
import Calendar from 'react-input-calendar'

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

export default NameForm