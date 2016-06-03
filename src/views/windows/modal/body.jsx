import React from 'react';
import ReactMarkdown from 'react-markdown';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    console.log(windowData.data)
    return ( 
      <div className="modal__body">
        <p className="modal__content">{ windowData.data.content}</p>
        <button className="modal__button">{ windowData.data.submitText }</button>
      </div>
    )
  }
}

export default Body;