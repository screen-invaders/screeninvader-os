import React from 'react';

import Menubar from './menubar.jsx';
import Body from './body.jsx';

class Browser extends React.Component{
  shouldComponentUpdate(nextProps){
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