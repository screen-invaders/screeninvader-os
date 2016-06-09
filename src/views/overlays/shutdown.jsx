import React from 'react';

import { overlay__change } from '../../actions/overlay.js';

class Shutdown extends React.Component{
  componentDidMount(){
    this.turnOff();
  }
  componentDidUpdate(){
    this.turnOff();
  }    
  turnOff(){
    setTimeout(()=>{
      console.log("Im off")
      this.props.dispatch(overlay__change("off"));
    }, 2000);  
  }
  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="shutdown">
          <div className="shutdown__reboot"> Afsluiten </div>
        </div>
      </div>
    )
	}
}

export default Shutdown;