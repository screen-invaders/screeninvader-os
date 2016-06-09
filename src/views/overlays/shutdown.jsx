import React from 'react';

import { overlay__change } from '../../actions/overlay.js';

class Shutdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [
        "Wijzigingen opslaan",
        "Configuratie opslaan",
        "Uitloggen",
        "Verbinding met servers wordt verbroken",
        "Systeem afsluiten"
      ],
      messagesCursor: 0,
      turnOff: 0
    }
  }

  componentDidMount(){
    if (this.state.turnOff == 0){
      this.turnOff();
    }
  }

  turnOff(){
    let interval = setInterval(()=>{this.setState((prevState)=>{return {...prevState, ...{messagesCursor: prevState.messagesCursor + 1}}})}, 400);
    setTimeout(()=>{
      clearInterval(interval);
      this.props.dispatch(overlay__change("off"));
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