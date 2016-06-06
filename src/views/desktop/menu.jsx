import React from 'react';
import Dropdown from './dropdown.jsx';

import { search__submitQuery, search__enterQuery, search__searchQuery } from '../../actions/search.js';
import { window__open } from '../../actions/windows/window.js';

import imgLogo from '../../assets/images/icons/row-1/6.png'
import imgArrow from '../../assets/images/arrow.svg'

class Menu extends React.Component{
  render() {
    let {state, dispatch} = this.props;
    console.log(state.search.history, state.search.history.length !== 0);
		return (
      <div className="menu">
        <ul className="menu__list">
          { state.menu.main.map((item, key)=>{
            return <li key={key} className="menu__list-item">
              <p>{item.name}</p>
              {item.dropdown && <Dropdown key={key} dispatch={dispatch} dropdown={item.dropdown}/>}
            </li>
          })}
        </ul>

        <form className="menu__search" onSubmit={(e)=>{
          e.preventDefault();
          let query = state.search.query;
          dispatch(search__submitQuery(query));
          dispatch(search__searchQuery(query, state.filesystem));
          dispatch(window__open("search", {}, query));
        }}>
          <input className="menu__searchbar" type="text" value={ state.search.query } placeholder="Zoeken" onChange={(e)=>{dispatch(search__enterQuery(e))}} />
          <input className="menu__search-icon" type="image" name="image" src={imgLogo}></input>
          <div className="menu__search-dropdown-button">
            <img className="menu__search-dropdown-button-arrow" src={imgArrow} />
            <Dropdown dispatch={dispatch} dropdown={(state.search.history.length !== 0) ? state.menu.searchDropdown.concat([{name: "Recente zoekopdrachten:"}], state.search.history) : state.menu.searchDropdown}/>
          </div>
        </form>

        <div className="menu__user-container">
          <h6 className="menu__user-notice">ingelogd als</h6>
          <p className="menu__user">{state.user.displayName}</p>
          <Dropdown dispatch={dispatch} dropdown={state.menu.userDropdown}/>
        </div>
      </div>
		)
	}
}

export default Menu;