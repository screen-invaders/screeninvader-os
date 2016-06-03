import React from 'react';

import { window__open } from '../../actions/windows/window.js';

class Dropdown extends React.Component{
  render() {
    let { dispatch, dropdown } = this.props;
		return (
      <ul className="dropdown">
        {this.props.dropdown.map((subItem, key)=>{
          return <li key={key} className="dropdown__list-item"><p className="dropdown__list-item-text" onClick={dispatch.bind(null, window__open("browser", {}))} >{ subItem.name }</p></li>
        })}
      </ul>
		)
	}
}

export default Dropdown;