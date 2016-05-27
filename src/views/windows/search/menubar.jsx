import React from 'react';

import { window__open } from '../../../actions/window.js';

class Menubar extends React.Component{
  activateAll(items){
    items.forEach((item)=>{
      this.props.dispatch(window__open(item.type, item));
    })
  }
  render() {
    let {windowData} = this.props;
    return (
      <div className="window__menubar window__menubar-search">
        <p>Zoekopdracht: {windowData.data.query}</p>
        <button className ="window__search-open-all" onClick={this.activateAll.bind(this, windowData.data.items)}>Open alle</button>
      </div>
    )
  }
}

export default Menubar;