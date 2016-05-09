import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import Folder from './folder.jsx';

class Window extends React.Component{
  render() {
		return (
			<div draggable="false" className="window" style={{left: this.props.itemData.viewPos.x, top: this.props.itemData.viewPos.y}}>
        <header className="window__header">

        </header>
        <main className="window__body">
        { this.props.filesystem.map((item, key)=>{
          return <Folder key={key} itemData={item} folderHandler={this.props.folderHandler}/> })}
        </main>
        <footer className="window__footer">

        </footer>
      </div>
    )
	}
}

export default Window;