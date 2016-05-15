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
      if (item.contents && item.contents.length > 0 ) {
        result.push(...this.pureSearch(query, item.contents));
      }
    });
    return result;
  }

  renderSearch(query, filesystem){
    let folders = this.pureSearch(query, filesystem).sort((a, b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let templatedFolders = folders.map((item, key)=>{
      return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/>
    })
    return templatedFolders;
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