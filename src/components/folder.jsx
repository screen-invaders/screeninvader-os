import React from 'react';

import imgFolder from '../assets/images/folder.png'
import imgFile from '../assets/images/file.png'

class Folder extends React.Component{
  render() {
    var imgLogo = "";
    switch (this.props.itemData.type){
      case "txt": 
        imgLogo = imgFile;
        break;
      case "dir": 
        imgLogo = imgFolder;
        break;
    }

    let actions = {
      folder__open: {
        type: "folder__open", 
        folder: this.props.itemData
      }
    };
		return (
      <div className="folder" onDoubleClick={this.props.dispatch.bind(null, actions.folder__open)}>
			  <img className="folder__image" draggable="false" src={imgLogo}></img>
        <p className="folder__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Folder;