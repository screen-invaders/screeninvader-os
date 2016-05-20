import React from 'react';

import { folder__open } from '../actions/folder.js';

import imgFolder from '../assets/images/folder.png'
import imgFile from '../assets/images/file.png'

class ListedFolder extends React.Component{
  render() {
		return (
      <div className="listed-folder" onDoubleClick={this.props.dispatch.bind(null, folder__open(this.props.itemData))}>
			  <img className="listed-folder__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "txt": 
              return imgFile;
            case "dir": 
              return imgFolder;
          }
        })()}></img>
        <div className="listed-folder__name">
          <p>{this.props.itemData.name}</p>
        </div>
        <p className="listed-folder__date">25-01-1998</p>
      </div>
    )
	}
}

export default ListedFolder;