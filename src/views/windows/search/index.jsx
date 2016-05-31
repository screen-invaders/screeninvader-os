import React from 'react';

import Menubar from './menubar.jsx';
import Sidebar from './sidebar.jsx';
import Body from './body.jsx';

class Search extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__content-inner">
        <Menubar windowData={windowData} dispatch={dispatch}/>
        <Sidebar windowData={windowData}/>
        <Body windowData={windowData} dispatch={dispatch}/>
      </div>
    )
  }
}

export default Search;