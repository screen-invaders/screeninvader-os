import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowText extends React.Component{
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
        <ReactMarkdown source={this.props.windowData.folder.contents} />
      </div>
    )
  }
}

export default WindowText;