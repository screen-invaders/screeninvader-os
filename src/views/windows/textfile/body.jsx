import React from 'react';
import ReactMarkdown from 'react-markdown';

import { data__get } from '../../../actions/windows/data.js';

class Body extends React.Component{
  componentWillMount(){
    let {windowData, dispatch} = this.props;
    dispatch(data__get(windowData, dispatch));
  }

  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className={"textfile__body"}>
        <ReactMarkdown source={windowData.data.content || "loading data"} />
      </div>
    )
  }
}

export default Body;