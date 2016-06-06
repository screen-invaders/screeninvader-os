import React from 'react';
import { connect } from 'react-redux'

import iconDesktop from '../../../assets/images/icons/row-12/9.png'
import iconDocumenten from '../../../assets/images/icons/row-11/12.png'
import iconAfbeeldingen from '../../../assets/images/icons/row-13/12.png'
import iconSpreadsheets from '../../../assets/images/icons/row-11/9.png'
import iconDatabases from '../../../assets/images/icons/row-9/11.png'
import iconBeveiligd from '../../../assets/images/icons/row-3/4.png'

class Sidebar extends React.Component{
  render() {
    let {windowData, dispatch, search} = this.props; 
    return (
      <div className="search__sidebar">
        <p className="search__sidebar-header">Verfijn:</p>
        <ul className="search__sidebar-ul">
          <li className="search__sidebar-li">Bestandstype</li>
          <li className="search__sidebar-li">Datum</li>
          <li className="search__sidebar-li">Grootte</li>
          <li className="search__sidebar-li">Eigenaar</li>
          <li className="search__sidebar-li">Beveiligd</li>
        </ul>
        <p className="search__sidebar-header">Geschiedenis:</p>
        <ul className="search__sidebar-ul">
          {search.history.map((historyItem, key)=>{
            return <li key={key} className="search__sidebar-li">{historyItem.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({search: state.search}), null, null, {pure: false})(Sidebar);
