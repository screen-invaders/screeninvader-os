import React from 'react';

class Search extends React.Component{
  render() {
		return (
      <div className="layout__overlay">
  		  <div className="search" onDoubleClick={this.props.searchHandler}>
          <form className="search__details" onSubmit={this.props.searchHandler}>
            <input className="search__field" type="text"></input>
            <input className="search__submit" type="submit"></input>
          </form>
        </div>
      </div>
    )
	}
}

export default Search;