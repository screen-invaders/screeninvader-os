import React from 'react';

import ListedItem from '../../items/listed-item.jsx';
import Item from '../../items/item.jsx';

class Body extends React.Component{
  render() {
    let { windowData, filesystem, dispatch } = this.props;
    return (
      <div className="browser__body">
        <iframe ref={function(iframe) {
          // Ref function to let an event bubble outside the Iframe. 
          if (iframe !== null) {
            let iframeContent = iframe.contentDocument || iframe.contentWindow.document;
            iframeContent.addEventListener('click', ()=>{
              console.log("insides run")
              let event = new Event('click');
              iframe.dispatchEvent(event);
            })
          }
        }} className="browser__iframe" src={ windowData.data.history[windowData.data.historyCursor] } onClick={()=>{console.log("bubbbbbleee: body")}}/>
      </div>
    )
  }
}

export default Body;