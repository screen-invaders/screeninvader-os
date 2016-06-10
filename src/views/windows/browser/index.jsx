import React from 'react';

import Menubar from './menubar.jsx';
import Body from './body.jsx';

class Browser extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData.data !== nextProps.windowData.data;
  }
  render() {
    let {windowData, dispatch} = this.props;
    let currentTab = windowData.data.tabs[windowData.data.currentTab];
    return (
      <div className="window__content-inner">
        <Menubar windowData={windowData} dispatch={dispatch}/>
        <Body tab={tab} dispatch={dispatch}/>
      </div>
    )
  }
}

export default Browser;