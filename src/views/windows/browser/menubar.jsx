import React from 'react';

import { browser__changeUrl, browser__submitUrl, browser__back, browser__forward } from '../../../actions/windows/browser.js';

import iconLeft from '../../../assets/images/icons/row-8/4.png'
import iconRight from '../../../assets/images/icons/row-8/5.png'

class Menubar extends React.Component{
  render() {
    let {tab, windowData, dispatch} = this.props;
    return (
      <div className="browser__menubar">
        <div className="browser__menubar-tabs">
          {windowData.data.tabs.map((tab, key)=>{
            if (tab.active) {
              return <div key={key} className="browser__menubar-tab browser__menubar-tab-active"> <p>{tab.title}</p> </div>
            }
            return <div key={key} className="browser__menubar-tab"> <p>{tab.title}</p> </div>
          })}
        </div>
        <div className="browser__menubar-inner">
          <div className="browser__menubar-icon-group">
            <div className="browser__menubar-icon" onClick={()=>{dispatch(browser__back(windowData))}} >
              <img className="browser__menubar-icon-img" src={iconLeft}/>
            </div>
            <div className="browser__menubar-icon" onClick={()=>{dispatch(browser__forward(windowData))}}>
              <img className="browser__menubar-icon-img" src={iconRight}/>
            </div>
          </div>
          <form className="browser__menubar-path-container" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(browser__submitUrl(windowData, windowData.data.url));
          }}>
            <input className="browser__menubar-path" value={tab.url} onChange={(e)=>{dispatch(browser__changeUrl(windowData, e))}} type="text"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Menubar;