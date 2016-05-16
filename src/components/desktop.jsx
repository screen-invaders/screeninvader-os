import React from 'react';

import FolderDraggable from './folder-draggable.jsx';
import Window from './window.jsx';

class Desktop extends React.Component{
  render() {
    console.log(this.props.filesystem)
		return (
  		<div className="desktop">
        {(()=>{
          var items = this.props.filesystem.children;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<FolderDraggable key={item} itemData={items[item]} folderHandler={this.props.folderHandler}/>);
            }
          }
          return templatedItems;
        })()}
        { this.props.windows.map((item, key)=>{
          return <Window key={key} itemData={item} filesystem={this.props.filesystem} folderHandler={this.props.folderHandler} windowHandler={this.props.windowHandler}/> })}
      </div>
    )
	}
}

export default Desktop;