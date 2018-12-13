// TableRow.js
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.event_name}
          </td>
          <td>
            {this.props.obj.startDate}
          </td>
      
        </tr>
    );
  }
}

export default TableRow;