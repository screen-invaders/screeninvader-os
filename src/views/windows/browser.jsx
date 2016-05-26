import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowBrowser extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }
  render() {
    return (
      <div className="window__body-inner">
        <iframe></iframe>
      </div>
    )
  }
}

export default WindowBrowser;