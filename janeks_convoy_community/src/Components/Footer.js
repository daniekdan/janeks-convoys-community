import React, { Component } from 'react'

function currentYear() {
    var d = new Date(); 
    return d.getFullYear(); 
}

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <span>&copy; {currentYear()} Made by <a href='https://danzym509.github.io/portfolio/' target='_blank'>Daniek.</a> All rights reserved.</span>
      </div>
    )
  }
}
