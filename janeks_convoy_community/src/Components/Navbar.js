import React, { Component } from 'react';
import logo from '../images/jcc-logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Disclaimer from './Disclaimer'

export default class Navbar extends Component {

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
      let navbarDiv = document.querySelector('.navbar');
      if (window.scrollY >= (window.innerHeight - 80)) { navbarDiv.classList.add("showBackground") }
      else { navbarDiv.classList.remove("showBackground") }
    };

  render() {
    return <div><Disclaimer />
    <div className='navbar' style={{ paddingTop: '40px' }}>
        <img src={logo} alt="Janek's Convoys Community" />
        <div>
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink offset='120' href="#event">Next Event Info</AnchorLink>
            <AnchorLink offset='120' href="#team">Meet the Team</AnchorLink>
            <AnchorLink href="#join">Join us!</AnchorLink>
        </div>
        </div>
    </div>;
  }
}
