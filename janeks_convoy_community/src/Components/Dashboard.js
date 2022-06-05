import React, { Component } from "react";
import FetchTeamsDashboard from "../core/FetchTeamsDashboard";
import FetchConvoyInfoDashboard from '../core/FetchConvoyInfoDashboard';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';

  onAuthStateChanged(auth, (user) => {
    if(document.getElementById('dashboard') != null) document.getElementById('dashboard').style.display = 'none';
    if (user) {
      if(document.getElementById('dashboard') != null) document.getElementById('dashboard').style.display = 'block';
    } else if (window.location == '/janeks-convoys-community/#dashboard') {
      //window.location = '/janeks-convoys-community/';
    }
  });



export default class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard" className="dashboardContainer" >
          <h2>Dashboard</h2>
          <h3>Event info</h3>
          <FetchConvoyInfoDashboard />
          <h3>Config „Meet the Team” section</h3>
          <div id="mtt_config">
          <FetchTeamsDashboard />
          </div>
        </div>
    )
  }
}