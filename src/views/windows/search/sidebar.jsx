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
      <div className="search__sidebar">
        <p className="search__sidebar-text"><img src={iconDesktop} className="search__sidebar-icon"/>Verfijn:</p>
        <p className="search__sidebar-text"><img src={iconDocumenten} className="search__sidebar-icon"/>Bestandstype</p>
        <p className="search__sidebar-text"><img src={iconAfbeeldingen} className="search__sidebar-icon"/>Datum</p>
        <p className="search__sidebar-text"><img src={iconSpreadsheets} className="search__sidebar-icon"/>Grootte</p>
        <p className="search__sidebar-text"><img src={iconDatabases} className="search__sidebar-icon"/>Eigenaar</p>
        <p className="search__sidebar-text"><img src={iconBeveiligd} className="search__sidebar-icon"/>Beveiligd</p>
      </div>
    )
  }
}

export default Sidebar;