import React from 'react';

import FolderDraggable from './folder-draggable.jsx';
import Window from './window.jsx';

class Desktop extends React.Component{
  render() {
		return (
  		<div className="desktop">
        { this.props.filesystem.map((item, key)=>{
          return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/> })}
        { this.props.windows.map((item, key)=>{
          return <Window key={key} itemData={item} filesystem={this.props.filesystem} folderHandler={this.props.folderHandler} windowHandler={this.props.windowHandler}/> })}
      </div>
    )
	}
}

export default Desktop;