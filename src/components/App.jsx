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
          {
            type: "explorer",
            filesystem: "main",
            filesystemPos: 1,
            viewPos: {
              x: 200,
              y: 200
            }
          }
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

  folderHandler(event){
    var randX = Math.random() * 400;
    var randY = Math.random() * 600;
    this.setState((prevState)=>{
      prevState.view.windows.push(
        {
          type: "explorer",
          filesystem: "main",
          filesystemPos: 1,
          viewPos: {
            x: randX,
            y: randY
          }
        }
      );
      return prevState;
    });
  }

  windowHandler(event, action){
    if (action == "close"){

    }
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
            <Desktop windows={this.state.view.windows} filesystem={this.state.filesystems.main} folderHandler={this.folderHandler.bind(this)} windowHandler={this.windowHandler.bind(this)}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;