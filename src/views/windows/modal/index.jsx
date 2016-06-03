import React from 'react';

import Body from './body.jsx';

class Modal extends React.Component{
  shouldComponentUpdate(nextProps){
    return this.props.windowData !== nextProps.windowData;
  }
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="window__content-inner">
        <Body windowData={windowData} dispatch={dispatch}/>
      </div>
    )
  }
}

export default Modal;