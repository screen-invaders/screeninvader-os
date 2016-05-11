import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';
import Search from './search.jsx';

import { main } from '../assets/data/filesystems/main.yml';

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
      filesystems: main
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

  folderHandler(itemData, event){
    var randX = Math.random() * 40;
    var randY = Math.random() * 60;
    var nextID = Math.random() * 0x10000;
    this.setState((prevState)=>{
      prevState.view.windows.push(
        {
          id: nextID,
          folder: itemData,
          type: "explorer",
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
      event.stopPropagation();
      this.setState((prevState)=>{
        prevState.view.windows.map((windowItem, key)=>{
          if (windowData.id == windowItem.id){
            prevState.view.windows.splice(key,1);
          }
        })
        return prevState;
      })
    } 

    else if (action == "tofront") {
      this.setState((prevState)=>{
        var temp;
        prevState.view.windows.map((windowItem, key)=>{
          if (windowData.id == windowItem.id){
            temp = prevState.view.windows.splice(key,1);
          }
        })

        prevState.view.windows.push(temp[0]);

        prevState.view.windows.map((windowItem, key)=>{
          return prevState.view.windows[key].viewIndex = 500 + key;
        });

        return prevState;
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
    console.log(this.state.view.windows)
		return (
			<div className="layout__OS">
        { this.overlay() }
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu searchActivate={this.searchActivate.bind(this)}/>
          </header>
          <div className="layout__desktop-main">
            <Desktop windows={this.state.view.windows} filesystem={this.state.filesystems} folderHandler={this.folderHandler.bind(this)} windowHandler={this.windowHandler.bind(this)}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;