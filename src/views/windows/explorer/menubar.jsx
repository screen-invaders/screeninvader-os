import React from 'react';

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__menubar">
          <input className="window__menubar-path" defaultValue={windowData.data.path.dir + "/" + windowData.data.path.name} type="text"/>
      </div>
    )
  }
}

export default Menubar;