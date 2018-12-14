// past.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import moment from 'moment';
export default class Past extends Component {

  constructor(props) {
      super(props);
      this.state = {event: []};
    }
  componentDidMount(){
      axios.get('http://localhost:4000/event')
        .then(response => {
          this.setState({ event: response.data });

        })
        .catch(function (error) {
          console.log(error);
        })
    }
   

  tabRow(){
      var events = this.state.event
      events.sort((a,b) => {   return new Date(a.startDate) - new Date(b.startDate)} ) ;
      events = events.filter(a => new Date(a.startDate) - new Date < 0);
      return events.map(function(object, i){
      return <TableRow obj={object} key={i} />;
   });
}


    render() {
      return (
        <div>
          <table className="table table-striped" style={{ marginTop: 20 , width:700}}>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }