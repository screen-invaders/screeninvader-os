import React from 'react';

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

        <form className="menu__search" onSubmit={this.props.searchHandler}>
          <input className="menu__searchbar" type="text" defaultValue="Zoeken"></input>
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