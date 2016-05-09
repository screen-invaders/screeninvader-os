import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import imgLogo from '../assets/images/SI_folder.svg'

class Folder extends React.Component{
  render() {
		return (
      <div className="folder" onDoubleClick={this.props.folderHandler}>
			  <img className="folder__image" draggable="false" src={imgLogo}></img>
        <p className="folder__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Folder;