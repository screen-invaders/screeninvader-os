import React from 'react';

import { window__open } from '../../actions/windows/window.js';
import { overlay__change } from '../../actions/overlay.js';
import { login__logout } from '../../actions/login.js';

class Dropdown extends React.Component{
  handleClick(subItem){
    let { dispatch } = this.props;
    if (subItem.type == "overlay"){
      if (subItem.special == "logout"){
        dispatch(login__logout(subItem.target))
      }
      dispatch(overlay__change(subItem.target))
    } else if (subItem.type == "window") {
      dispatch(window__open(subItem.target, {content: subItem.content, submitText: subItem.submitText}))
    }
  }
  render() {
    let { dispatch, dropdown } = this.props;
		return (
      <ul className="dropdown">
        {this.props.dropdown.map((subItem, key)=>{
          return <li key={key} className="dropdown__list-item"><p className={"dropdown__text " + "dropdown__text-type-" + subItem.display} onClick={this.handleClick.bind(this, subItem)} >{ subItem.name }</p></li>
        })}
      </ul>
		)
	}
}

export default Dropdown;