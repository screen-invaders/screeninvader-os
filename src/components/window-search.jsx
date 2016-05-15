import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowSearch extends React.Component{
  render() {
    return (
      <div className="window__body-inner">
        <p>{this.props.itemData.searchQuery}</p>  

        {(()=>{
        
        })()}
      </div>
    )
  }
}

export default WindowSearch;