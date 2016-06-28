import React from 'react';

import iconLeft from '../../../assets/images/icons/row-10/7.png'
import iconRight from '../../../assets/images/icons/row-4/12.png'
import iconUp from '../../../assets/images/icons/row-10/11.png'
import iconList from '../../../assets/images/icons/row-1/6plus.png'
import iconIcons from '../../../assets/images/icons/row-1/6minus.png'

class Menubar extends React.Component{
  render() {
    return (
      <div className="pdf__menubar">
        <div className="pdf__menubar-icon-group">
          <div className="pdf__menubar-icon"><img className="explorer__menubar-icon-img" src={iconLeft}/></div>
          <div className="pdf__menubar-icon" ><img className="explorer__menubar-icon-img" src={iconRight}/></div>
          <div className="pdf__menubar-icon" ><img className="explorer__menubar-icon-img" src={iconUp} /></div>
        </div>
        <div  className="pdf__menubar-icon-group">
          <div className="pdf__menubar-icon"><img className="explorer__menubar-icon-img" src={iconList} /></div>
          <div className="pdf__menubar-icon"><img className="explorer__menubar-icon-img" src={iconIcons} /></div>
          <input className="pdf__menubar-path" placeholder="Zoeken" type="text"/>
        </div>
      </div>
    )
  }
}

export default Menubar;