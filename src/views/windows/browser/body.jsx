import React from 'react';

class Body extends React.Component{
  componentDidMount(){
    this.bubbleThroughIframe();
  }

  componentDidUpdate(){
    this.bubbleThroughIframe();
  }

  bubbleThroughIframe(){
    // Get the DOM version of the component by ref
    let iframe = this.refs['iframe'];
    if (iframe !== null) {
      // Check wether Iframe is loaded;
      var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          // Get the document of the iframe
          let iframeContent = iframe.contentDocument || iframe.contentWindow.document;
          // Attach an eventHandler
          iframeContent.addEventListener('click', ()=>{
            // Create a bubbling event and dispatch it outside the iframe
            let event = new CustomEvent('click', {"bubbles":true});
            iframe.dispatchEvent(event);
          })
        }
      }, 10);
    }
  }

  render() {
    let { tab, dispatch } = this.props;
    return (
      <div className="browser__body">
        <iframe ref="iframe" className="browser__iframe" src={tab.history[tab.historyCursor]}/>
      </div>
    )
  }
}

export default Body;