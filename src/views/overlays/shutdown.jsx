import React from 'react';

import { overlay__change } from '../../actions/overlay.js';

class Shutdown extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="shutdown">
          <p> Afsluiten </p>
        </div>
      </div>
    )
	}
}

export default Shutdown;