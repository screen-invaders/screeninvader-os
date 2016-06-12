import React from 'react';
import ReactMarkdown from 'react-markdown';

import { data__fakeGet } from '../../../actions/windows/data.js';

class Body extends React.Component{
  componentWillMount(){
    let {windowData, dispatch} = this.props;
    dispatch(data__fakeGet(windowData, dispatch));
  }
  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="textfile__body">
        <ReactMarkdown source={ windowData.data.content || "Bezig met ophalen van de data" } />
      </div>
    )
  }
}

export default Body;