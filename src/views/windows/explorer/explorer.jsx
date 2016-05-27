import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import ListedFolder from '../../items/listed-folder.jsx';

class Explorer extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }
  render() {
    return (
      <div className="window__content-inner">
        <div className="window__menubar">
        </div>
        <div className="window__sidebar">
        </div>
        <div className="window__body">
        {(()=>{
          if (this.props.windowData.data.items){
            var items = this.props.windowData.data.items;
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
      </div>
    )
  }
}

export default Explorer;