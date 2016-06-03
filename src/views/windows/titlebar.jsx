import React from 'react';
import { bindActionCreators } from 'redux'

import { window__close } from '../../actions/windows/window.js';

import iconCross from '../../assets/images/icons/row-8/12.png'

class Titlebar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    let bound__window__close = function(){return dispatch(window__close(windowData))}.bind(this);

    let titleText;
    switch (windowData.type) {
      case "dir":
        titleText = windowData.data.path[windowData.data.path.length - 1];
      break;
      case "txt":
        titleText = windowData.data.path[windowData.data.path.length - 1];
      break;
      case "search":
        titleText = windowData.data.query;
      break;
      case "browser":
        titleText = windowData.data.url;
      break;
    };

    return (
      <div className="window__titlebar-inner">
        <p className="window__titlebar-text">{titleText}</p>
        <div className="window__titlebar-close-button" onClick={bound__window__close}><img src={iconCross}/></div>
      </div>
    )
  }
}

export default Titlebar;