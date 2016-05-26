import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowBrowser extends React.Component{
  shouldComponentUpdate(nextProps){
    if (this.props == nextProps){
      return false;
    } else {
      return true;
    }
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