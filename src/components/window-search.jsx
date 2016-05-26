import React from 'react';

import FolderDraggable from './folder-draggable.jsx';

import { window__open } from '../actions/window.js';


class WindowSearch extends React.Component{

  renderSearch(items){
    if (items){
      let templatedFolders = items.map((item, key)=>{
        return <FolderDraggable key={key} itemData={item} dispatch={this.props.dispatch}/>
      })
      return templatedFolders;
    } else {
      return "no results"
    }
  }

  activateAll(items){
    items.forEach((itemData)=>{
      this.props.dispatch(window__open(itemData));
    })
  }

  render() {
    return (
      <div className="window__body-inner-outer">
        <div className="window__search-details">
          <p>Zoekopdracht: {this.props.windowData.data.query}</p>
          <button className ="window__search-open-all" onClick={this.activateAll.bind(this, this.props.windowData.data.items)}>Open alle</button>
        </div>
        <div className="window__body-inner">
          {this.renderSearch(this.props.windowData.items)}
        </div>
      </div>
    )
  }
}

export default WindowSearch;