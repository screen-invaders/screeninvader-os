import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import ListedFolder from './listed-folder.jsx';

class WindowExplorerList extends React.Component{
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <div className="window__body-inner">
        {(()=>{
        if (this.props.windowData.folder.children){
          var items = this.props.windowData.folder.children;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<ListedFolder key={item} itemData={items[item]} dispatch={this.props.dispatch}/>);
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

export default WindowExplorerList;