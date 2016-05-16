import React from 'react';
import ReactMarkdown from 'react-markdown';

class WindowText extends React.Component{
  render() {
    return (
      <div className="window__body-inner">
        <ReactMarkdown source={this.props.itemData.folder.contents} />
      </div>
    )
  }
}

export default WindowText;