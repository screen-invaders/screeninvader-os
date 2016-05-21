let reducer = function (state, action) {
  // This line is potentially harmfull (for example: Date objects aren't properly copied)
  // Perf is slow too... Updates take way longer if you have to clone a gigantic state.
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type == "overlay__change2login"){
    return {...state, ...{
      overlay: {
        ...state.overlay, 
        type: "login"
        }
      }
    };
  }

  if (action.type == "overlay__change2none"){
    if (newState.login.attempts == 0) {
      return {...state, ...{
        overlay: {
          ...state.overlay, 
          type: ""
        }
      }}
    } else {
      return {...state, ...{
        login: {
          ...state.login, 
          attempts: state.login.attempts - 1
        }
      }}
    }
  }

  else if (action.type == "search__enterQuery") {
    newState.searchQuery = action.query;
    return newState;
  }

  else if (action.type == "search__submitQuery") {
    var randX = Math.random() * (window.innerWidth - 620);
    var randY = Math.random() * (window.innerHeight - 500);
    var nextID = Math.random() * 0x10000;
    var newWindow = {
      id: nextID,
      type: "Zoeken",
      searchQuery: state.searchQuery || "AFM",
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
    newState.windows.push(newWindow);
    newState.searchQuery = "";
    return newState;
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

    newState.windows.push(
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

    return newState;
  }

  else if (action.type == "window__close"){
    newState.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.windows.splice(key,1);
      }
    })
    return newState;
  } 

  else if (action.type == "window__tofront") {
    newState.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        var temp = newState.windows.splice(key,1);
        newState.windows.push(temp[0]);
        newState.windows.map((windowItem, key)=>{
          return newState.windows[key].viewIndex = 500 + key;
        });
      }
    })
    return newState;
  }

  else if (action.type == "window__move") {
    newState.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.windows[key].viewPos = {
          x: action.position.x,
          y: action.position.y
        }
      }
    })
    return newState;
  }
  else if (action.type == "window__resize") {
    newState.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.windows[key].viewSize = {
          x: action.size.x,
          y: action.size.y
        }
      }
    });
    return newState;
  } 

  else {
    return Object.assign({}, state);
  }
}

export default reducer;