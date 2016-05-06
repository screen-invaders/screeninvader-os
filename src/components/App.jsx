import React from 'react';

import Menu from './menu.jsx'
import Desktop from './desktop.jsx'

class App extends React.Component{
  render() {
  		return (
  			<div className="layout__OS">
          <header className="layout__header">
            <Menu />
          </header>
          <div className="layout__desktop">
            <Desktop />
          </div>
  			</div>
  		)
		}
}

export default App;