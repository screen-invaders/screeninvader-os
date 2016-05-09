import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import imgLogo from '../assets/images/SI_folder.svg'

class Folder extends React.Component{
  render() {
		return (
      <Draggable>
        <div className="folder">
  			  <img className="folder__image" draggable="false" src={imgLogo}></img>
          <p className="folder__text">{this.props.itemData.name}</p>
        </div>
		  </Draggable>
    )
	}
}

export default Folder;