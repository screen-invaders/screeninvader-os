import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowSearch extends React.Component{
  render() {
    let searchQuery = this.props.itemData.searchQuery;
    return (
      <div className="window__body-inner">
        {(()=>{
          var folders = this.props.filesystem.map((item, key)=>{
            if (item.name.indexOf(searchQuery) != -1){
              return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/>
            }
          })
          return folders;
        })()}
      </div>
    )
  }
}

export default WindowSearch;