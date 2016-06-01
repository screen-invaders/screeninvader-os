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
        {(()=>{
        if (windowData.data.content == undefined){
          return <div>
          <PDF file="filesystem/hgt.pdf" loading={(<span>Your own loading message ...</span>)}/>
          </div>
        } else {
          return "no PDF";
        }
        })()}
      </div>
    )
  }
}

export default Body;