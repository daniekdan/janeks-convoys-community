import React, { Component } from 'react';
import FetchInfoMain from '../core/FetchInfoMain'

export default class Convoy extends Component {
  render() {
    return <div id='event' className='convoyInfo'>
      <h2>Event Info</h2>

      <div className='convoyContainer'>
        <FetchInfoMain />
      </div>
  </div>;
  }
}
