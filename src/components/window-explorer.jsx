import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowExplorer extends React.Component{
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <div className="window__body-inner">
        {(()=>{
        console.log(this.props.windowData)
        if (this.props.windowData.data.items){
          var items = this.props.windowData.data.items;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<FolderDraggable key={item} itemData={items[item]} dispatch={this.props.dispatch}/>);
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