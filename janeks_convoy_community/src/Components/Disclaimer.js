import React, { Component } from 'react'

const divStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '40px',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
  };

export default class Disclaimer extends Component {
    
  render() {
    return (
      <div style={divStyle}>
          <b>THIS IS A TEST BUILD! </b>&nbsp;This is not representing a final product and several things could and will change.
      </div>
    )
  }
}
