import React from 'react';

import Folder from './folder.jsx'
import Nav from './nav.jsx'

class App extends React.Component{
  render() {
  		return (
  			<div className="layout__desktop">
          <Nav />
          <div className="layout__desktop-area">
            <Folder />
            <Folder />
            <Folder />
          </div>
  			</div>
  		)
		}
}
export default App;