import React from 'react';

import Menubar from './menubar.jsx';
import Body from './body.jsx';

class Browser extends React.Component{
  shouldComponentUpdate(nextProps){
    console.log("shouldupdate tests");
    console.log("generic: ", this.props.windowData.data !== nextProps.windowData.data)
    console.log("expanded: ", this.props.windowData.data.history !== nextProps.windowData.data.history)
    console.log("Deepest: ", this.props.windowData.data.history[0] !== nextProps.windowData.data.history[0])
    console.log(this.props.windowData.data.history[0], nextProps.windowData.data.history[0])
    return this.props.windowData.data !== nextProps.windowData.data;
  }
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__content-inner">
        <Menubar windowData={windowData} dispatch={dispatch}/>
        <Body windowData={windowData} dispatch={dispatch}/>
      </div>
    )
  }
}

export default Browser;