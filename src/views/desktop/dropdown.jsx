import React from 'react';

import { window__open } from '../../actions/windows/window.js';
import { overlay__change } from '../../actions/overlay.js';
import { login__logout } from '../../actions/login.js';

class Dropdown extends React.Component{
  handleClick(subItem){
    let { dispatch } = this.props;
    if (subItem.action){
      if (subItem.action.type == "overlay__change"){
        if (subItem.action.window == "logout"){
          dispatch(login__logout(subItem.action.window))
        }
        dispatch(overlay__change(subItem.action.window))
      } else if (subItem.action.type == "window__open") {
        dispatch(window__open(subItem.action.window, {content: subItem.action.content, submitText: subItem.action.submitText}))
      }
    }
  }
  render() {
    let { dispatch, dropdown } = this.props;
		return (
      <ul className="dropdown">
        {this.props.dropdown.map((subItem, key)=>{
          let listItem;
          if (subItem.type === "hr"){
            listItem = <hr key={key} className="dropdown__hr"/>;
          } else if (subItem.type === "small"){
            listItem = <li key={key} className="dropdown__list-item"><p className="dropdown__text dropdown__text-type-small" onClick={this.handleClick.bind(this, subItem)} >{ subItem.name }</p></li>;
          } else {
            listItem = <li key={key} className="dropdown__list-item"><p className="dropdown__text" onClick={this.handleClick.bind(this, subItem)} >{ subItem.name }</p></li>;
          }
          return listItem;
        })}
      </ul>
		)
	}
}

export default Dropdown;