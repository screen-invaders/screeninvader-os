import React from 'react';

import Item from '../../items/item.jsx';

class Body extends React.Component{
  render() {
    let {windowData} = this.props;
    return (
      <div className="search__body">
      { (windowData.data.items.length && 
          windowData.data.items.map((item, key)=>{
            return <Item key={key} itemData={item} dispatch={this.props.dispatch}/>
        })) || <div> No results </div> }
      </div>
    )
  }
}

export default Body;