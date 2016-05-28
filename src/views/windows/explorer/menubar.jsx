import React from 'react';

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__menubar">
          <input className="window__menubar-path" value={windowData.data.path.unsplit} type="text"/>
      </div>
    )
  }
}

export default Menubar;