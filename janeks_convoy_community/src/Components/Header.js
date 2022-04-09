import React, { Component } from 'react';
import GetOnlyDateOfConvoy from '../core/GetOnlyDateOfConvoy';

export default class Header extends Component {
  render() {
    return <div className='header h'>
        <div>
            <div>
                <h1>Next Janek's Convoys Community event will happen in</h1>
                <GetOnlyDateOfConvoy />
            </div>
        </div>
    </div>;
  }
}
