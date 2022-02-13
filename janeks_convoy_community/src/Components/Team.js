import React, { Component } from 'react';
import TeamList from "./TeamList";

export default class Team extends Component {
  render() {
    return <div className='team' id='team'>
        <h2>Meet the team</h2>
        <div>
            <TeamList />
        </div>
    </div>;
  }
}
