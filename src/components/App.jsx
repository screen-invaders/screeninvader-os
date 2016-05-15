import React from 'react';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';

import { main } from '../assets/data/filesystems/main.yml';

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
          type: "login",
          attempts: 2          
        },
        searchQuery: "",
        windows: [

        ]
      },
      filesystems: main
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

  searchHandler(event){
    event.preventDefault();
    var randX = Math.random() * (window.innerWidth - 620);
    var randY = Math.random() * (window.innerHeight - 500);
    var nextID = Math.random() * 0x10000;
    this.setState((prevState)=>{
      console.log(prevState.view.searchQuery)
      var newWindow = {
        id: nextID,
        type: "Search",
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
    var randX = Math.random() * (window.innerWidth - 620);
    var randY = Math.random() * (window.innerHeight - 500);
    var nextID = Math.random() * 0x10000;
    this.setState((prevState)=>{
      prevState.view.windows.push(
        {
          id: nextID,
          folder: itemData,
          type: "Explorer",
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

  windowHandler(action, windowData, newPosition, event){
    
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

    else if (action == "move") {
      this.setState((prevState)=>{ 
        prevState.view.windows.map((windowItem, key)=>{
          if (windowData.id == windowItem.id){
            prevState.view.windows[key].viewPos = {
              x: newPosition.x,
              y: newPosition.y
            }
          }
          return prevState;
        })
      });
    }

  }

  overlay(){
    switch (this.state.view.overlay.type){
      case "login": return <Login view={this.state.view} loginHandler={this.loginHandler.bind(this)} />;
    }
  }

  render() {
		return (
			<div className="layout__OS">
        { this.overlay() }
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu searchQuery={this.state.view.searchQuery} searchQueryHandler={this.searchQueryHandler.bind(this)} searchHandler={this.searchHandler.bind(this)}/>
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