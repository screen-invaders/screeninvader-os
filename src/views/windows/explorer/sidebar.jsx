import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import iconDesktop from '../../../assets/images/icons/row-12/9.png'
import iconDocumenten from '../../../assets/images/icons/row-11/12.png'
import iconAfbeeldingen from '../../../assets/images/icons/row-13/12.png'
import iconSpreadsheets from '../../../assets/images/icons/row-12/14.png'
import iconDatabases from '../../../assets/images/icons/row-9/11.png'
import iconBeveiligd from '../../../assets/images/icons/row-3/4.png'

class Sidebar extends React.Component{
  render() {
    return (
      <div className="explorer__sidebar">
        <p className="explorer__sidebar-text"><img src={iconDesktop} className="explorer__sidebar-icon"/>Bureaublad</p>
        <p className="explorer__sidebar-text"><img src={iconDocumenten} className="explorer__sidebar-icon"/>Documenten</p>
        <p className="explorer__sidebar-text"><img src={iconAfbeeldingen} className="explorer__sidebar-icon"/>Afbeeldingen</p>
        <p className="explorer__sidebar-text"><img src={iconSpreadsheets} className="explorer__sidebar-icon"/>Spreadsheets</p>
        <p className="explorer__sidebar-text"><img src={iconDatabases} className="explorer__sidebar-icon"/>Databases</p>
        <p className="explorer__sidebar-text"><img src={iconBeveiligd} className="explorer__sidebar-icon"/>Beveiligd</p>
      </div>
    )
  }
}

export default Sidebar;