import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowExplorer extends React.Component{
  render() {
    return (
      <div className="window__body-inner">
        {(()=>{
        if (this.props.itemData.folder.contents){
          var folders = this.props.itemData.folder.contents.map((item, key)=>{
            return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/> 
          }) 
        return folders;
        }
        })()}
      </div>
    )
  }
}

export default WindowExplorer;