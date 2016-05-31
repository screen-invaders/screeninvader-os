import React from 'react';

import Menubar from './menubar.jsx';
import Sidebar from './sidebar.jsx';
import Body from './body.jsx';

import PDFDist from 'pdfjs-dist';

class PDF extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__content-inner">
        <Menubar windowData={windowData}/>
        <Sidebar windowData={windowData} dispatch={dispatch}/>
        <Body windowData={windowData} dispatch={dispatch}/>
      </div>
    )
  }
}

export default PDF;