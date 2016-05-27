import React from 'react';

import FolderDraggable from '../../items/folder-draggable.jsx';

class Body extends React.Component{
  render() {
    let {windowData} = this.props;
    return (
      <div className="window__body">
      { (windowData.data.items.length && 
          windowData.data.items.map((item, key)=>{
            return <FolderDraggable key={key} itemData={item} dispatch={this.props.dispatch}/>
        })) || <div> No results </div> }
      </div>
    )
  }
}

export default Body;