import React from 'react';
import PDFDist from 'pdfjs-dist';

import PDF from './pdf-wrapper.jsx';

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
        {(()=>{
        if (windowData.data.content == undefined){
          return <PDF file="filesystem/hgt.pdf" page={3} loading={(<span>Your own loading message ...</span>)}/>
        } else {
          return "no PDF";
        }
        })()}
      </div>
    )
  }
}

export default Body;