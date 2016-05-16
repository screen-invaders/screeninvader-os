import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowExplorer extends React.Component{
  render() {
    return (
      <div className="window__body-inner">
        {(()=>{
        if (this.props.itemData.folder.children){
          var items = this.props.itemData.folder.children;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<FolderDraggable key={item} itemData={items[item]} folderHandler={this.props.folderHandler}/>);
            }
          }
          return templatedItems;
        } else {
          return "Geen inhoud";
        }
        })()}
      </div>
    )
  }
}

export default WindowExplorer;