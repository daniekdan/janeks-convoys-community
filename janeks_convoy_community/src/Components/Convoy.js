import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faCalendar, faCircleInfo, faFlagCheckered, faClock, faCircleExclamation, faMap, faServer, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default class Convoy extends Component {
  render() {
    return <div id='event' className='convoyInfo'>
      <h2>Event Info</h2>

      <div className='convoyContainer'>
        <div className='cInformations'>
          <div>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>March Convoy</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Date: </span>
            <span>13<sup>th</sup> March 2022</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} />
            <span>Meet-up: </span>
            <span>12:00 UTC</span>
          </div>
          <div>
              <FontAwesomeIcon icon={faLocationDot} />
            <span>From: </span>
            <span>Marseille (City)</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faFlagCheckered} />
            <span>Destination: </span>
            <span>La Rochelle (Soon)</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faRoute} />
            <span>Distance: </span>
            <span>1 031 km</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faServer} />
            <span>Server: </span>
            <span>Event Server</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <span>Required DLCs: </span>
            <span>Vive La France!</span>
          </div>
        </div>
        <div className='cMap'>
          <FontAwesomeIcon icon={faMap} />
          <span>Map</span>
          <img src="https://cdn.discordapp.com/attachments/891392881586241578/926931685960990740/Convoy2.png" alt="Map" />
        </div>
      </div>
  </div>;
  }
}
