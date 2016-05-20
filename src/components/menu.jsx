import React from 'react';

import { search__submitQuery, search__enterQuery } from '../actions/search.js';

import imgLogo from '../assets/images/search.png'

class Menu extends React.Component{
  render() {
		return (
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">Systeem</li>
          <li className="menu__list-item">Belastingen</li>
          <li className="menu__list-item">Organisatie</li>
          <li className="menu__list-item">Toeslagen</li>
          <li className="menu__list-item">Aangifte</li>
          <li className="menu__list-item">Meldingen</li>
        </ul>

        <form className="menu__search" onSubmit={(e)=>{
          e.preventDefault();
          this.props.dispatch(search__submitQuery());
        }}>
          <input className="menu__searchbar" type="text" placeholder="Zoeken" value={this.props.state.searchQuery} onChange={(e)=>{
            this.props.dispatch(search__enterQuery(e));
          }} />
          <input className="menu__search-icon" type="image" name="image" src={imgLogo}></input>
        </form>

        <div className="menu__user-container">
          <h6 className="menu__user-notice">ingelogd als</h6>
          <p className="menu__user">Mevr. I. XXX</p>
        </div>
      </div>
		)
	}
}

export default Menu;