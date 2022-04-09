import React, { Component } from 'react';
import Fetch from "../core/Fetch";

export default class Team extends Component {  

  render() {
    return <div className='team' id='team'>
        <h2>Meet the Team</h2>
        <Fetch />
    </div>;
  }
}
