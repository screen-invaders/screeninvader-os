import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowSearch extends React.Component{
  pureSearch(query, folder){
    let result = [];
    folder.forEach((item)=>{
      if (item.name.indexOf(query) != -1){
        result.push(item);
      }
      if (item.contents) {
        result.concat(result, pureSearch(query, item.contents));
      }
    });
    return result;
  }

  renderSearch(query, folder){
    var folders = folder.map((item, key)=>{
      return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/>
    })
    return folders;
  }

  render() {
    return (
      <div className="window__body-inner">
        {this.renderSearch(this.props.itemData.searchQuery, this.props.filesystem)}
      </div>
    )
  }
}

export default WindowSearch;