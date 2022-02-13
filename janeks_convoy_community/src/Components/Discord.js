import React, { Component } from 'react'

export default class Discord extends Component {
  render() {
    return (
      <div className='discord'>
          <h2>Discord</h2>
          <div>
              <div>
                  <span>Join our Discord server!</span>
                  <a href="https://discord.gg/6QQkeP4Ntu">discord.gg/6QQkeP4Ntu</a>
              </div>
              <iframe src="https://discord.com/widget?id=932058254454951956&theme=dark" title='discord' width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
      </div>
    )
  }
}
