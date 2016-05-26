import React from 'react';

import FolderDraggable from './folder-draggable.jsx';

import { window__open } from '../actions/window.js';


class WindowSearch extends React.Component{

  activateAll(items){
    items.forEach((itemData)=>{
      this.props.dispatch(window__open(itemData));
    })
  }

  render() {
    let {windowData} = this.props;
    console.log(windowData)
    return (
      <div className="window__body-inner-outer">
        <div className="window__search-details">
          <p>Zoekopdracht: {windowData.data.query}</p>
          <button className ="window__search-open-all" onClick={this.activateAll.bind(this, windowData.data.items)}>Open alle</button>
        </div>
        <div className="window__body-inner">
        { (windowData.data.items.length && 
            windowData.data.items.map((item, key)=>{
              return <FolderDraggable key={key} itemData={item} dispatch={this.props.dispatch}/>
          })) || <div> No results </div> }
        </div>
      </div>
    )
  }
}

export default WindowSearch;