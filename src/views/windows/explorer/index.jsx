import React from 'react';

import Menubar from './menubar.jsx';
import Sidebar from './sidebar.jsx';
import Body from './body.jsx';

class Explorer extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData.data !== nextProps.windowData.data;
  }
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__content-inner">
        <Menubar windowData={windowData}/>
        <Sidebar windowData={windowData}/>
        <Body windowData={windowData} dispatch={dispatch}/>
      </div>
    )
  }
}

export default Explorer;