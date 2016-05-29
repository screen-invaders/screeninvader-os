import React from 'react';

import { window__moveUp, window__changeViewType } from '../../../actions/window.js';

import iconLeft from '../../../assets/images/icons/row-8/4.png'
import iconRight from '../../../assets/images/icons/row-8/5.png'
import iconUp from '../../../assets/images/icons/row-8/6.png'
import iconList from '../../../assets/images/icons/row-9/13.png'
import iconIcons from '../../../assets/images/icons/row-11/3.png'

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="explorer__menubar">
        <div className="explorer__menubar-icon-group">
          <div className="explorer__menubar-icon"><img className="explorer__menubar-icon-img" src={iconLeft}/></div>
          <div className="explorer__menubar-icon"><img className="explorer__menubar-icon-img" src={iconRight}/></div>
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, window__moveUp(windowData))} ><img className="explorer__menubar-icon-img" src={iconUp} /></div>
        </div>
        <input className="explorer__menubar-path" value={windowData.data.path.join("/")} onChange={()=>{}} type="text"/>
        <div  className="explorer__menubar-icon-group">
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, window__changeViewType(windowData, "list"))}><img className="explorer__menubar-icon-img" src={iconList} /></div>
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, window__changeViewType(windowData, "icons"))}><img className="explorer__menubar-icon-img" src={iconIcons} /></div>
        </div>
      </div>
    )
  }
}

export default Menubar;