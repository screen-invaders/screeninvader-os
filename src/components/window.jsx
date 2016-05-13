import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { ResizableBox } from 'react-resizable';

import Folder from './folder.jsx';

class Window extends React.Component{

  folders(){
    if (this.props.itemData.folder.contents){
      var folders = this.props.itemData.folder.contents.map((item, key)=>{
        return <Folder key={key} itemData={item} folderHandler={this.props.folderHandler}/> 
      })  
    }
    return folders;
  }

  render() {
    var style = {
      zIndex: this.props.itemData.viewIndex
    };

		return (
      <ResizableBox 
        width={600} 
        height={400}>
  			<div className="window" style={style} onClick={this.props.windowHandler.bind(null, "tofront", this.props.itemData)}>
          <header className="window__header">
            <div className="window__close-button" onClick={this.props.windowHandler.bind(null, "close", this.props.itemData)}>x</div>
          </header>
          <main className="window__body">
          { this.folders() }
          </main>
        </div>
      </ResizableBox>
    )
	}
}

export default Window;