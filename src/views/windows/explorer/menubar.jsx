import React from 'react';

class Menubar extends React.Component{
  render() {
    return (
      <div className="window__menubar">
          <input className="window__menubar-path" type="text"/>
      </div>
    )
  }
}

export default Menubar;