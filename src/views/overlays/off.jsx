import React from 'react';

import { overlay__change } from '../../actions/overlay.js';

class Shutdown extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="off">
          <div className="off__reboot"> Opstarten </div>
        </div>
      </div>
    )
	}
}

export default Shutdown;