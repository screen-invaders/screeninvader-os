import React from 'react';
import Dropdown from './dropdown.jsx';

import { search__submitQuery, search__enterQuery } from '../actions/search.js';

import imgLogo from '../assets/images/search.png'

class Menu extends React.Component{
  render() {
		return (
      <div className="menu">
        <ul className="menu__list">
          { this.props.state.menu.map((item, key)=>{
            return <li key={key} className="menu__list-item">
              <p>{item.name}</p>
              {item.dropdown && <Dropdown key={key} dropdown={item.dropdown}/>}
            </li>
          })}
        </ul>

        <form className="menu__search" onSubmit={(e)=>{
          e.preventDefault();
          this.props.dispatch(search__submitQuery(e));
        }}>
          <input className="menu__searchbar" type="text" placeholder="Zoeken" onChange={(e)=>{this.props.dispatch(search__enterQuery(e))}} />
          <input className="menu__search-icon" type="image" name="image" src={imgLogo}></input>
          <div className="menu__search-dropdown-button">
            \/
            <Dropdown dropdown={this.props.state.searchDropdown}/>
          </div>
        </form>


        <div className="menu__user-container">
          <h6 className="menu__user-notice">ingelogd als</h6>
          <p className="menu__user">{this.props.state.user.name}</p>
        </div>
      </div>
		)
	}
}

export default Menu;