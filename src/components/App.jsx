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
            id: 0,
            type: "explorer",
            filesystem: "main",
            filesystemPos: 1,
            viewPos: {
              x: 200,
              y: 200
            },
            viewSize: {
              x: 600,
              y: 400
            },
            viewIndex: 500
          }
        ]
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

  searchActivate(){
    this.setState((prevState)=>{
      prevState.view.overlay.type = "search";
      return prevState;
    });
  }

  searchHandler(event){
    event.preventDefault();
    this.setState((prevState)=>{
      prevState.view.overlay.type = "none";
      return prevState;
    });
  }

  folderHandler(event){
    var randX = Math.random() * 400;
    var randY = Math.random() * 600;
    var nextID = this.state.view.windows.length++;
    this.setState((prevState)=>{
      prevState.view.windows.push(
        {
          id: nextID,
          type: "explorer",
          filesystem: "main",
          filesystemPos: 1,
          viewPos: {
            x: randX,
            y: randY
          },
          viewSize: {
            x: 600,
            y: 400
          },
          viewIndex: 500
        }
      );
      return prevState;
    });
  }

  windowHandler(action, windowData, event){
    if (action == "close"){
      this.setState((prevState)=>{
        this.state.view.windows.map((window, key)=>{
          if (windowData.id == window.id){
            prevState.view.windows.splice(key,1);
          }
        })
      })
    }
  }

  overlay(){
    switch (this.state.view.overlay.type){
      case "login": return <Login loginHandler={this.loginHandler.bind(this)} />;
      case "search": return <Search searchHandler={this.searchHandler.bind(this)}/>;
    }
  }

  render() {
		return (
			<div className="layout__OS">
        { this.overlay() }
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu searchActivate={this.searchActivate.bind(this)}/>
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