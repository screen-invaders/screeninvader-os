import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import Folder from './folder.jsx';

class FolderDraggable extends React.Component{
  render() {
		return (
      <Draggable>
        <div>
		      <Folder {...this.props}/>
        </div>
      </Draggable>
    )
	}
}

export default FolderDraggable;