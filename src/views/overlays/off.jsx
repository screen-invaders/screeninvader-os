import React from 'react';

import { overlay__change } from '../../actions/overlay.js';
import { login__logout } from '../../actions/login.js';

class Shutdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      onButton: false
    }
  }

  componentDidMount(){
    this.turnOn();
  }

  turnOn(){
    setTimeout(()=>{
      this.setState({onButton: true})
    }, 2000);  
  }

  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="off">
          { this.state.onButton && <div className="off__reboot" onClick={()=>{
            dispatch(overlay__change("startup"))
            dispatch(login__logout())
          }}> Opstarten </div> }
        </div>
      </div>
    )
	}
}

export default Shutdown;