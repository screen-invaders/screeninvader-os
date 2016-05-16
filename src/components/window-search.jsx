import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import FolderDraggable from './folder-draggable.jsx';

class WindowSearch extends React.Component{
  componentWillMount(){
    this.setState({searchItems: this.pureSearch(this.props.itemData.searchQuery, this.props.filesystem)});
  }

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

    result = result.sort((a, b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return result;
  }

  renderSearch(searchItems){
    let templatedFolders = searchItems.map((item, key)=>{
      return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/>
    })
    return templatedFolders;
  }

  activateAll(searchItems){
    searchItems.map((itemData)=>{
      this.props.folderHandler.bind(null, itemData)();
    })
  }

  render() {
    return (
      <div className="window__body-inner">
        <button className ="window__search-open-all" onClick={this.activateAll.bind(this, this.state.searchItems)}>Open alle</button>
        {this.renderSearch(this.state.searchItems)}
      </div>
    )
  }
}

export default WindowSearch;