import React from 'react';

import FolderDraggable from './folder-draggable.jsx';

import { window__open } from '../actions/window.js';


class WindowSearch extends React.Component{
  componentWillMount(){
    this.setState({searchItems: this.pureSearch(this.props.windowData.searchQuery, this.props.state.filesystem.children)});
  }

  pureSearch(query, folder){
    let result = [];
    for (var item in folder) {
      if (folder.hasOwnProperty(item)) {
        if (folder[item].name.indexOf(query) != -1){
          result.push(folder[item]);
        }
        if (folder[item].children) {
          result.push(...this.pureSearch(query, folder[item].children));
        }
      }
    };

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
      return <FolderDraggable key={key} itemData={item} dispatch={this.props.dispatch}/>
    })
    return templatedFolders;
  }

  activateAll(searchItems){
    searchItems.forEach((itemData)=>{
      this.props.dispatch(window__open(itemData));
    })
  }

  render() {
    return (
      <div className="window__body-inner-outer">
        <div className="window__search-details">
          <p>Zoekopdracht: {this.props.windowData.searchQuery}</p>
          <button className ="window__search-open-all" onClick={this.activateAll.bind(this, this.state.searchItems)}>Open alle</button>
        </div>
        <div className="window__body-inner">

          {this.renderSearch(this.state.searchItems)}
        </div>
      </div>
    )
  }
}

export default WindowSearch;