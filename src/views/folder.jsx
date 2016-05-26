import React from 'react';

import { window__open } from '../actions/window.js';

import imgFolder from '../assets/images/folder.png'
import imgFile from '../assets/images/file.png'

class Folder extends React.Component{
  render() {
		return (
      <div className="folder" onDoubleClick={this.props.dispatch.bind(null, window__open(this.props.itemData.type, this.props.itemData))}>
			  <img className="folder__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "txt": 
              return imgFile;
            case "dir": 
              return imgFolder;
          }
        })()}></img>
        <p className="folder__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Folder;