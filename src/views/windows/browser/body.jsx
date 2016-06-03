import React from 'react';

import ListedItem from '../../items/listed-item.jsx';
import Item from '../../items/item.jsx';

class Body extends React.Component{
  render() {
    let { windowData, filesystem, dispatch } = this.props;
    return (
      <div className="browser__body">
        <iframe className="browser__iframe" src={ windowData.data.url } />
      </div>
    )
  }
}

export default Body;