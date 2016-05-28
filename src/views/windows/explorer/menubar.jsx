import React from 'react';

import iconLeft from '../../../assets/images/icons/row-8/4.png'
import iconRight from '../../../assets/images/icons/row-8/5.png'
import iconList from '../../../assets/images/icons/row-9/13.png'
import iconIcons from '../../../assets/images/icons/row-11/3.png'

class Menubar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__menubar">
        <div>
          <img src={iconLeft} className="window__sidebar-icon"/>
          <img src={iconRight} className="window__sidebar-icon"/>
        </div>
        <input className="window__menubar-path" value={windowData.data.path.unsplit} type="text"/>
        <div>
          <img src={iconList} className="window__sidebar-icon"/>
          <img src={iconIcons} className="window__sidebar-icon"/>
        </div>
      </div>
    )
  }
}

export default Menubar;