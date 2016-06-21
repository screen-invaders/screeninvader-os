import React from 'react';

import { window__open } from '../../../actions/windows/window.js';

class Menubar extends React.Component{
  activateAll(items){
    items.forEach((item, key)=>{
      if (key < 20){
        this.props.dispatch(window__open(item.type, item));
      }
    })
  }
  render() {
    let {windowData} = this.props;
    return (
      <div className="search__menubar">
        <p>Zoekopdracht: {windowData.data.query}</p>
        <button className ="search__menubar-open-all" onClick={this.activateAll.bind(this, windowData.data.searchResult)}>Open alle</button>
      </div>
    )
  }
}

export default Menubar;