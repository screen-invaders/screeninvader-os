import React from 'react';

import ListedItem from '../../items/listed-item.jsx';
import Item from '../../items/item.jsx';

class Body extends React.Component{
  render() {
    let { windowData, filesystem, dispatch } = this.props;
    console.log("browserbody", windowData.data.history)
    return (
      <div className="browser__body">
        <iframe className="browser__iframe" src={ windowData.data.history[0] } />
      </div>
    )
  }
}

export default Body;