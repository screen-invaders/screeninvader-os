import React from 'react';

import { overlay__change } from '../../actions/overlay.js';
import { login__logout } from '../../actions/login.js';

class Shutdown extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="off">
          <div className="off__reboot" onClick={()=>{
            dispatch(overlay__change("login"))
            dispatch(login__logout())
          }}> Opstarten </div>
        </div>
      </div>
    )
	}
}

export default Shutdown;