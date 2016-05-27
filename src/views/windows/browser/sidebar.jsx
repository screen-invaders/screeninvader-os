import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

class Sidebar extends React.Component{
  render() {
    return (
      <div className="window__sidebar">
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
        <p className="window__sidebar-text">Filename</p>
      </div>
    )
  }
}

export default Sidebar;