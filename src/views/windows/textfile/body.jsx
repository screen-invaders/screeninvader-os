import React from 'react';
import ReactMarkdown from 'react-markdown';

class Body extends React.Component{
  render() {
    return (
      <div className="textfile__body">
        <ReactMarkdown source="hello" />
      </div>
    )
  }
}

export default Body;