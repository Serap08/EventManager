
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangeEventName = this.onChangeEventName.bind(this);
      this.state = {
      startDate: new Date()
      };
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          event_name: '',     
      }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
 
  onChangeEventName(e) {
    this.setState({
      event_name: e.target.value
    });
  }
  
   onSubmit(e) {
    e.preventDefault();
    const obj = {
      event_name: this.state.event_name,
      startDate:this.state.startDate

    };
    axios.post('http://localhost:4000/event/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      event_name: '', 

    })
    
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label> Event Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.event_name}
                        onChange={this.onChangeEventName}
                        />
                  </div>
                  <div className="form-group">
                    <label>Select Date: </label>
                    <br></br>
                    <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleChange }
                    />
                 </div>   

                  <div className="form-group">
                      <input type="submit" value="Add to Calendar" className="btn btn-primary"/>
                  </div>
                    
              </form>
          
          </div>
      )
  }
}
