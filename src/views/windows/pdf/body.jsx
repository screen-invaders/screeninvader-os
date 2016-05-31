import React from 'react';
import PDF from 'react-pdf';

import { data__getData } from '../../../actions/data.js';

class Body extends React.Component{
  componentWillMount(){
    let {windowData, dispatch} = this.props;
    dispatch(data__getData(windowData, dispatch));
  }

  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className={"textfile__body"}>
        <PDF file="./filesystem/bacon_berkshire.pdf" loading={(<span>Your own loading message ...</span>)}/>
        {(()=>{
        if (windowData.data.content != ""){
          return <PDF content="windowData.data.content" loading={(<span>Your own loading message ...</span>)}/>
        } else {
          return "no PDF";
        }
        })()}
      </div>
    )
  }
}

export default Body;