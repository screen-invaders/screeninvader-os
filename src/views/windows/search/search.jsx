import React from 'react';

import FolderDraggable from '../../items/folder-draggable.jsx';

import { window__open } from '../../../actions/window.js';


class WindowSearch extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }

  activateAll(items){
    items.forEach((item)=>{
      this.props.dispatch(window__open(item.type, item));
    })
  }

  render() {
    let {windowData} = this.props;
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