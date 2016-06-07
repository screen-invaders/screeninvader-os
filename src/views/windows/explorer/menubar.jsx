import React from 'react';

import { explorer__moveUp, explorer__back, explorer__forward, explorer__changeViewType } from '../../../actions/windows/explorer.js';

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
          <div className="explorer__menubar-icon" onClick={()=>{dispatch(explorer__back(windowData))}}><img className="explorer__menubar-icon-img" src={iconLeft}/></div>
          <div className="explorer__menubar-icon" onClick={()=>{dispatch(explorer__forward(windowData))}}><img className="explorer__menubar-icon-img" src={iconRight}/></div>
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, explorer__moveUp(windowData))} ><img className="explorer__menubar-icon-img" src={iconUp} /></div>
        </div>
        <input className="explorer__menubar-path" value={windowData.data.history[windowData.data.historyCursor].join("/")} onChange={()=>{}} type="text"/>
        <div  className="explorer__menubar-icon-group">
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, explorer__changeViewType(windowData, "list"))}><img className="explorer__menubar-icon-img" src={iconList} /></div>
          <div className="explorer__menubar-icon" onClick={dispatch.bind(null, explorer__changeViewType(windowData, "icons"))}><img className="explorer__menubar-icon-img" src={iconIcons} /></div>
        </div>
      </div>
    )
  }
}

export default Menubar;