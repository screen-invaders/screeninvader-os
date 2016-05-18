let dispatch = function (action) {
  if (action.type == "overlay__change2login"){
    this.setState((prevState)=>{
      prevState.view.overlay.type = "login";
      return prevState;
    });
  }

  if (action.type == "overlay__change2none"){
    this.setState((prevState)=>{
      if (this.state.view.overlay.attempts == 0) {
        prevState.view.overlay.type = "";
      } else {
        prevState.view.overlay.attempts--;
      }
      return prevState;
    });
  }

  else if (action.type == "search__enterQuery") {
    this.setState((prevState)=>{
      prevState.view.searchQuery = action.query;
      return prevState;
    });
  }

  else if (action.type == "search__submitQuery") {
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

  else if (action.type == "folder__open") {
    let randX = Math.random() * (window.innerWidth - 620);
    let randY = Math.random() * (window.innerHeight - 500);
    let nextID = Math.random() * 0x10000;
    let type;

    switch (action.folder.type) {
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
          folder: action.folder,
          filesystemPos: action.folder.path,
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

  else if (action.type == "window__close"){
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

export default dispatch;