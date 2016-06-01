import React from 'react';

import PDF from './pdf-loader.jsx';

import { data__getBinaryData } from '../../../actions/data.js';

class Body extends React.Component{
  componentWillMount(){
    let {windowData, dispatch} = this.props;
    // dispatch(data__getBinaryData(windowData, dispatch));
  }

  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="pdf__body">
        <PDF file="filesystem/hgt.pdf" />
      </div>
    )
  }
}

export default Body;