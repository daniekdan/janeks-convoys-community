import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';

function currentYear() {
    var d = new Date(); 
    return d.getFullYear(); 
}

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <span>version 22.4.10 • &copy; {currentYear()} Made by <a href='https://danzym509.github.io/portfolio/' target='_blank'>Daniek.</a> All rights reserved. • </span><HashLink to="/login">Dashboard</HashLink>
      </div>
    )
  }
}
