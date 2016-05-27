import React from 'react';

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    console.log(windowData)
    return (
      <div className="window__menubar">
          <input className="window__menubar-path" value={windowData.data.path} type="text"/>
      </div>
    )
  }
}

export default Menubar;