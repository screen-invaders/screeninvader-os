import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowBrowser extends React.Component{
  render() {
    return (
      <div className="window__body-inner">
        <iframe></iframe>
      </div>
    )
  }
}

export default WindowBrowser;