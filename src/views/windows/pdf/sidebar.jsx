import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import PDF from './pdf-loader.jsx';

class Sidebar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="pdf__sidebar">
        <PDF file="filesystem/hgt.pdf" />
      </div>
    )
  }
}

export default Sidebar;