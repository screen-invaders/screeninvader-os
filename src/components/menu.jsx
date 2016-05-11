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
        <div className="menu__search" onClick={this.props.searchActivate}>
          <p>Zoeken</p>
          <img className="folder__image" draggable="false" src={imgLogo}></img>
        </div>
      </div>
		)
	}
}

export default Menu;