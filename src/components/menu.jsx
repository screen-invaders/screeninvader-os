import React from 'react';

class Menu extends React.Component{
  render() {
		return (
      <div className="menu">
        <div onClick={this.props.searchActivate}>search</div>
      </div>
		)
	}
}

export default Menu;