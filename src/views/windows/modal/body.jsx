import React from 'react';
import ReactMarkdown from 'react-markdown';

import { search__eraseHistory } from '../../../actions/search.js';
import { window__close } from '../../../actions/windows/window.js';

class Body extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return ( 
      <div className="modal__body">
        <p className="modal__content">{ windowData.data.content}</p>
        <button className="modal__button" onClick={()=>{
          dispatch(search__eraseHistory());
          dispatch(window__close(windowData));
        }}>{ windowData.data.submitText }</button>
      </div>
    )
  }
}

export default Body;