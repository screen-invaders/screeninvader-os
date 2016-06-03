import React from 'react';

import Explorer from './explorer/index.jsx';
import Search from './search/index.jsx';
import TXT from './textfile/index.jsx';
import PDF from './pdf/index.jsx';

class Content extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <main className="window__content">
      {(()=>{
      let windows = {
        dir:          <Explorer windowData={windowData} dispatch={dispatch}/>,
        search:       <Search   windowData={windowData} dispatch={dispatch}/>,
        txt:          <TXT      windowData={windowData} dispatch={dispatch}/>,
        pdf:          <PDF      windowData={windowData} dispatch={dispatch}/>
      }
      return windows[windowData.type];
      })()}
      </main>
    )
  }
}

export default Content;