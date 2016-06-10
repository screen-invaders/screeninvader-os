import React from 'react';

import { overlay__change } from '../../actions/overlay.js';

class Shutdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [
        "BIOS boot",
        "Kernel Initialisatie",
        "Subsystemen laden",
        "Configuratie laden",
        "Verbinding met servers maken",
        "GUI laden",
        "GUI laden",
        "Antivirus check",
        "Antivirus check",
        "Antivirus check",
        "Startup interactive logon"
      ],
      messagesCursor: 0,
      turnOn: 0
    }
  }

  componentDidMount(){
    if (this.state.turnOn == 0){
      this.turnOn();
    }
  }

  turnOn(){
    let interval = setInterval(()=>{this.setState((prevState)=>{return {...prevState, ...{messagesCursor: prevState.messagesCursor + 1}}})}, 200);
    setTimeout(()=>{
      clearInterval(interval);
      this.props.dispatch(overlay__change("login"));
    }, 2000);  
  }

  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="shutdown">
          <div className="shutdown__details"> {this.state.messages[this.state.messagesCursor]} </div>
        </div>
      </div>
    )
	}
}

export default Shutdown;