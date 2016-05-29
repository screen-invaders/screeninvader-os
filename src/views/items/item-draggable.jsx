import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import Item from './item.jsx';

class ItemDraggable extends React.Component{
  render() {
		return (
      <Draggable>
        <div>
		      <Item {...this.props}/>
        </div>
      </Draggable>
    )
	}
}

export default ItemDraggable;