import React from 'react';

import Folder from './folder.jsx'
import Nav from './nav.jsx'

class App extends React.Component{
  render() {
  		return (
  			<div className="layout__desktop">
          <Nav />
          <Folder />
          <Folder />
          <Folder />
  			</div>
  		)
		}
}
export default App;