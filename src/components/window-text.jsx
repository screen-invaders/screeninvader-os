import React from 'react';
import ReactMarkdown from 'react-markdown';

var article = "# Hello I'm a markdown header \n Im a paragraph";

class WindowText extends React.Component{
  render() {
    console.log(article)
    return (
      <div className="window__body-inner">
        <ReactMarkdown source={article} />
      </div>
    )
  }
}

export default WindowText;