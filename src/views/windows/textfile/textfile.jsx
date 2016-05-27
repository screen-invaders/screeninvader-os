import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowText extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
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