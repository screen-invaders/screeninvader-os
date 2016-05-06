import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';

import main from '../assets/data/filesystems/main.yml';
import personen from '../assets/data/filesystems/personen.yml';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: {
        screen: "desktop"
        windows: [

        ]
      },
      databases: {},
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