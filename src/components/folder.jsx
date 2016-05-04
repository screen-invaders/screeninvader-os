import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import imgLogo from '../assets/images/SI_folder.svg'

class Folder extends React.Component{
  render() {
		return (
      <Draggable>
  			<img draggable="false" className="folder" src={imgLogo}></img>
		  </Draggable>
    )
	}
}

export default Folder;