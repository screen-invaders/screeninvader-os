import React from 'react';

import Item from '../../items/item.jsx';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    console.log(windowData)
    return (
      <div className="search__body">
      { (windowData.data.searchResult.length && 
          windowData.data.searchResult.map((item, key)=>{
            return <Item key={key} itemData={item} dispatch={dispatch}/>
        })) || <div className="search__no-result"> Geen resultaten </div> }
      </div>
    )
  }
}

export default Body;