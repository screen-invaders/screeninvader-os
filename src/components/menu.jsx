import React from 'react';

class Menu extends React.Component{
  render() {
		return (
      <div className="menu">
        <div onClick={this.props.searchHandler}>search</div>
      </div>
		)
	}
}

export default Menu;