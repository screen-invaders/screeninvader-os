import React from 'react';

import PDF from './pdf-loader.jsx';

import pdfFile from '../../../assets/pdf/investigation.pdf';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="pdf__body">
        <PDF content={pdfFile}/>
      </div>
    )
  }
}

export default Body;