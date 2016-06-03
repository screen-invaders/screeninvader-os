import React from 'react';

import { browser__changeUrl } from '../../../actions/windows/browser.js';

import iconLeft from '../../../assets/images/icons/row-8/4.png'
import iconRight from '../../../assets/images/icons/row-8/5.png'
import iconUp from '../../../assets/images/icons/row-8/6.png'
import iconList from '../../../assets/images/icons/row-9/13.png'
import iconIcons from '../../../assets/images/icons/row-11/3.png'

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="browser__menubar">
        <div className="browser__menubar-icon-group">
          <div className="browser__menubar-icon"><img className="browser__menubar-icon-img" src={iconLeft}/></div>
          <div className="browser__menubar-icon"><img className="browser__menubar-icon-img" src={iconRight}/></div>
        </div>
        <form className="browser__menubar-path-container" onSubmit={(e)=>{
          e.preventDefault;
          dispatch(browser__submitUrl(windowData, windowData.data.url));
        }}>
          <input className="browser__menubar-path" value={windowData.data.url} onChange={(e)=>{dispatch(browser__changeUrl(windowData, e))}} type="text"/>
        </form>
      </div>
    )
  }
}

export default Menubar;