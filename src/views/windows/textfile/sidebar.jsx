import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import iconDesktop from '../../../assets/images/icons/row-12/9.png'
import iconDocumenten from '../../../assets/images/icons/row-11/12.png'
import iconAfbeeldingen from '../../../assets/images/icons/row-13/12.png'
import iconSpreadsheets from '../../../assets/images/icons/row-11/9.png'
import iconDatabases from '../../../assets/images/icons/row-9/11.png'
import iconBeveiligd from '../../../assets/images/icons/row-3/4.png'

class Sidebar extends React.Component{
  render() {
    return (
      <div className="window__sidebar">
        <p className="window__sidebar-text"><img src={iconDesktop} className="window__sidebar-icon"/>Bureaublad</p>
        <p className="window__sidebar-text"><img src={iconDocumenten} className="window__sidebar-icon"/>Documenten</p>
        <p className="window__sidebar-text"><img src={iconAfbeeldingen} className="window__sidebar-icon"/>Afbeeldingen</p>
        <p className="window__sidebar-text"><img src={iconSpreadsheets} className="window__sidebar-icon"/>Spreadsheets</p>
        <p className="window__sidebar-text"><img src={iconDatabases} className="window__sidebar-icon"/>Databases</p>
        <p className="window__sidebar-text"><img src={iconBeveiligd} className="window__sidebar-icon"/>Beveiligd</p>
      </div>
    )
  }
}

export default Sidebar;