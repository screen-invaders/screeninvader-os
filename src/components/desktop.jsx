import React from 'react';

import Folder from './folder.jsx'

class Desktop extends React.Component{
  render() {
		return (
  		<div className="desktop">
        <Folder />
        <Folder />
        <Folder />
      </div>
    )
	}
}

export default Desktop;