import React from 'react';
import ReactMarkdown from 'react-markdown';

class Body extends React.Component{
  render() {
    return (
      <div className="window__body">
        <ReactMarkdown source={this.props.windowData.folder.contents} />
      </div>
    )
  }
}

export default Body;