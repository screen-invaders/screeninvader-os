import React from 'react';
import { bindActionCreators } from 'redux'

import { window__close } from '../../actions/window.js';

import iconCross from '../../assets/images/icons/row-8/12.png'

class Titlebar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    let bound__window__close = function(){return dispatch(window__close(windowData))}.bind(this);
    return (
      <div className="window__titlebar-inner">
        <p className="window__titlebar-text">{windowData.type}</p>
        <div className="window__titlebar-close-button" onClick={bound__window__close}><img src={iconCross}/></div>
      </div>
    )
  }
}

export default Titlebar;