import React from 'react';

import PDF from './pdf-loader.jsx';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="pdf__body">
        <PDF file={'filesystem/' + windowData.data.path.join('/')} />
      </div>
    )
  }
}

export default Body;