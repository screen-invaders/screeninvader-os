import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import PDF from './pdf-loader.jsx';

import pdfFile from '../../../assets/pdf/investigation.pdf';

class Sidebar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="pdf__sidebar">
        <PDF content={pdfFile.split(',')[1]}/>
      </div>
    )
  }
}

export default Sidebar;