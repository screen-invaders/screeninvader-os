import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';
import Search from './search.jsx';

import main from '../assets/data/filesystems/main.yml';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: {
        screen: "desktop",
        overlay: {
          type: "login",
          attempts: 0          
        },
        windows: [

        ]
      },
      databases: {

      },
      filesystems: { ...main }
    }
  }

  loginHandler(event){
    event.preventDefault();
    this.setState((prevState)=>{
      if (this.state.view.overlay.attempts >= 2) {
        prevState.view.overlay.type = "none";
      } else {
        prevState.view.overlay.attempts++;
      }
      return prevState;
    });
  }

  overlay(){
    switch (this.state.view.overlay.type){
      case "login": return <Login loginHandler={this.loginHandler.bind(this)} />;
      case "search": return <Search />;
    }
  }

  render() {
		return (
			<div className="layout__OS">
        { this.overlay() }
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu />
          </header>
          <div className="layout__desktop-main">
            <Desktop filesystem={this.state.filesystems.main}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;