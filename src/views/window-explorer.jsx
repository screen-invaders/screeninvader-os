import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowExplorer extends React.Component{
  shouldComponentUpdate(){
    return false;
  }
  render() {
    let {dispatch, windowData} = this.props;
    return (
      <div className="window__body-inner">
        {(()=>{
        if (windowData.data.items){
          var templatedItems = [];
          for (var item in windowData.data.items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<FolderDraggable key={item} itemData={items[item]} dispatch={dispatch}/>);
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