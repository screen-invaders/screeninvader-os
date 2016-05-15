import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import imgFolder from '../assets/images/folder.png'
import imgFile from '../assets/images/file.png'

class Folder extends React.Component{
  render() {
    var imgLogo = imgFolder;
    // switch (this.props.itemData.type){
    //   case "txt": imgLogo = imgFile;
    //   case "dir": imgLogo = imgFolder;
    // }
		return (
      <div className="folder" onDoubleClick={this.props.folderHandler.bind(null, this.props.itemData)}>
			  <img className="folder__image" draggable="false" src={imgLogo}></img>
        <p className="folder__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Folder;