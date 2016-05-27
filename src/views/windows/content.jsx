import React from 'react';

import WindowExplorerList from './explorer/explorer-list.jsx';
import WindowSearch from './search/search.jsx';
import WindowText from './textfile/textfile.jsx';

class Content extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <main className="window__body">
      {(()=>{
      let windows = {
        Verkenner: <WindowExplorerList windowData={windowData} dispatch={dispatch}/>,
        Zoeken: <WindowSearch windowData={windowData} dispatch={dispatch} state={this.props.state} />,
        Tekstbestand: <WindowText windowData={windowData}/>
      }
      return windows[windowData.type];
      })()}
      </main>
    )
  }
}

export default Content;