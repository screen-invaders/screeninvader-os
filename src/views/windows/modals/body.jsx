import React from 'react';
import ReactMarkdown from 'react-markdown';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="modal__body">
      </div>
    )
  }
}

export default Body;