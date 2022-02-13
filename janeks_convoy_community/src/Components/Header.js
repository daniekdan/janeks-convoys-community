import React, { Component } from 'react';
import trucksImage from "../images/trucks1.png";
import Countdown from "./Countdown";

export default class Header extends Component {
  render() {
    return <div id='about' className='header'>
        <div>
            {/* <img src={trucksImage} alt="Welcome on Janek's Convoys Community webpage!" /> */}
            <div>
                <h1>Next Janek's Convoys Community event will happen in</h1>
                <Countdown date={`2022-03-13T14:00:00`} />
            </div>
        </div>
    </div>;
  }
}
