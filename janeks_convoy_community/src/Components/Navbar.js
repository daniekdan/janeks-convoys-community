import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/jcc-logo.png';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

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
    return <div>
    <div className='navbar'>
        <img src={logo} alt="Janek's Convoys Community" />
        <div>
        <HashLink smooth to="/#about" scroll={scrollWithOffset}>About</HashLink>
        <HashLink smooth to="/#event" scroll={scrollWithOffset}>Next Event Info</HashLink>
        <HashLink smooth to="/#team" scroll={scrollWithOffset}>Meet the Team</HashLink>
        <HashLink to="/join-us#">Join us!</HashLink>
        </div>
        </div>
    </div>;
  }
}
