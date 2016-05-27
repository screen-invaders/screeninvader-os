import React from 'react';

import Explorer from './explorer/index.jsx';
import WindowSearch from './search/index.jsx';
import WindowText from './textfile/index.jsx';

class Content extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <main className="window__content">
      {(()=>{
      let windows = {
        Verkenner:    <Explorer     windowData={windowData} dispatch={dispatch}/>,
        Zoeken:       <WindowSearch windowData={windowData} dispatch={dispatch}/>,
        Tekstbestand: <WindowText   windowData={windowData}/>
      }
      return windows[windowData.type];
      })()}
      </main>
    )
  }
}

export default Content;