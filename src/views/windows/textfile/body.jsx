import React from 'react';
import ReactMarkdown from 'react-markdown';

import { data__getData } from '../../../actions/data.js';

class Body extends React.Component{
  componentWillMount(){
    console.log(this.props)
    let {windowData, dispatch} = this.props;
    dispatch(data__getData(windowData, dispatch));
  }

  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="textfile__body">
        <ReactMarkdown source="hello" />
      </div>
    )
  }
}

export default Body;