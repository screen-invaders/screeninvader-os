import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';
import Admin from './admin.jsx';

import main from '../assets/data/dataDir.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "IvMourik",
        password: "scotty"
      },
      view: {
        screen: "desktop",
        overlay: {
          type: "admin",
          attempts: 2          
        },
        searchQuery: "",
        windows: [

        ]
      },
      filesystem: main
    }
  }

  loginHandler(event){
    event.preventDefault();
    this.setState((prevState)=>{
      if (this.state.view.overlay.attempts == 0) {
        prevState.view.overlay.type = "none";
      } else {
        prevState.view.overlay.attempts--;
      }
      return prevState;
    });
  }

  adminHandler(event){
    this.setState((prevState)=>{
      prevState.view.overlay.type = "login";
      return prevState;
    });
  }

  searchHandler(event){
    event.preventDefault();
    var randX = Math.random() * (window.innerWidth - 620);
    var randY = Math.random() * (window.innerHeight - 500);
    var nextID = Math.random() * 0x10000;
    this.setState((prevState)=>{
      var newWindow = {
        id: nextID,
        type: "Zoeken",
        searchQuery: prevState.view.searchQuery,
        viewPos: {
          x: randX,
          y: randY
        },
        viewSize: {
          x: 600,
          y: 400
        },
        viewIndex: 600
      };
      prevState.view.windows.push(newWindow);
      prevState.view.searchQuery = "";
      return prevState;
    });
  }

  searchQueryHandler(e) {
    let newSearchQuery = e.target.value;
    this.setState((prevState)=>{
      prevState.view.searchQuery = newSearchQuery;
      return prevState;
    });
  }

  folderHandler(itemData, event){
    let randX = Math.random() * (window.innerWidth - 620);
    let randY = Math.random() * (window.innerHeight - 500);
    let nextID = Math.random() * 0x10000;
    let type;

    switch (itemData.type) {
      case "dir": 
        type = "Verkenner";
        break;
      case "txt": 
        type = "Tekstbestand";
        break;
    }

    this.setState((prevState)=>{
      prevState.view.windows.push(
        {
          id: nextID,
          folder: itemData,
          filesystemPos: itemData.path,
          type: type,
          viewPos: {
            x: randX,
            y: randY
          },
          viewSize: {
            x: 600,
            y: 400
          },
          viewIndex: 600
        }
      );
      return prevState;
    });
  }

  dispatch(action, event){

    if (action.type == "window__close"){
      event.stopPropagation();
      this.setState((prevState)=>{
        prevState.view.windows.map((windowItem, key)=>{
          if (action.window.id == windowItem.id){
            prevState.view.windows.splice(key,1);
          }
        })
        return prevState;
      })
    } 

    else if (action.type == "window__tofront") {
      this.setState((prevState)=>{
        prevState.view.windows.map((windowItem, key)=>{
          if (action.window.id == windowItem.id){
            var temp = prevState.view.windows.splice(key,1);
            prevState.view.windows.push(temp[0]);
            prevState.view.windows.map((windowItem, key)=>{
              return prevState.view.windows[key].viewIndex = 500 + key;
            });
          }
        })
        return prevState;
      })
    }

    else if (action.type == "window__move") {
      this.setState((prevState)=>{ 
        prevState.view.windows.map((windowItem, key)=>{
          if (action.window.id == windowItem.id){
            prevState.view.windows[key].viewPos = {
              x: action.position.x,
              y: action.position.y
            }
          }
          return prevState;
        })
      });
    }

    else if (action.type == "window__resize") {
      this.setState((prevState)=>{ 
        prevState.view.windows.map((windowItem, key)=>{
          if (action.window.id == windowItem.id){
            prevState.view.windows[key].viewSize = {
              x: action.size.x,
              y: action.size.y
            }
          }
          return prevState;
        })
      });
    }

  }

  render() {
		return (
			<div className="layout__OS">
        {(()=>{
          switch (this.state.view.overlay.type){
            case "admin": return <Admin view={this.state.view} adminHandler={this.adminHandler.bind(this)} />
            case "login": return <Login view={this.state.view} loginHandler={this.loginHandler.bind(this)} />;
          }
        })()}
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu searchQuery={this.state.view.searchQuery} searchQueryHandler={this.searchQueryHandler.bind(this)} searchHandler={this.searchHandler.bind(this)}/>
          </header>
          <div className="layout__desktop-main">
            <Desktop windows={this.state.view.windows} filesystem={this.state.filesystem} folderHandler={this.folderHandler.bind(this)} dispatch={this.dispatch.bind(this)}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;