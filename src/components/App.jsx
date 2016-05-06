import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';

import main from '../assets/data/main.yml';
import personen from '../assets/data/personen.yml';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: "desktop",
      databases: [

      ],
      filesystems: { main, personen }
    }
  }
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