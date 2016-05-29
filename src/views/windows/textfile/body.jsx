import React from 'react';
import ReactMarkdown from 'react-markdown';

class Body extends React.Component{
  render() {
    return (
      <div className="window__body">
        <div className="window__markdown-container">
          <ReactMarkdown source="hello" />
        </div>
      </div>
    )
  }
}

export default Body;