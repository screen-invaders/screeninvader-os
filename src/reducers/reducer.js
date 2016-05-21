let reducer = function (state, action) {
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
      }};
    } else {
      return {...state, ...{
        login: {
          ...state.login, 
          attempts: state.login.attempts - 1
        }
      }};
    }
  }

  else if (action.type == "search__enterQuery") {
    return {...state, ...{
      searchQuery: action.query
    }};
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
    return {...state, ...{
      windows: [
        ...state.windows,
        newWindow
      ],
      searchQuery: ""
    }};
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

    let newWindow = {
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
    };
    return {...state, ...{
      windows: [
        ...state.windows,
        newWindow
      ],
      searchQuery: ""
    }};
  }

  else if (action.type == "window__close"){
    let newWindows = [...state.windows];
    newWindows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newWindows.splice(key,1);
      }
    })
    return {...state, ...{
      windows: newWindows
    }};
  } 

  else if (action.type == "window__tofront") {
    let newWindows = [...state.windows];
    newWindows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        var temp = newWindows.splice(key,1);
        newWindows.push(temp[0]);
        newWindows.map((windowItem, key)=>{
          return newWindows[key].viewIndex = 500 + key;
        });
      }
    })
    return {...state, ...{
      windows: newWindows
    }}
  }

  else if (action.type == "window__move") {
    let newWindows = [...state.windows];
    newWindows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newWindows[key].viewPos = {
          x: action.position.x,
          y: action.position.y
        }
      }
    })
    return {...state, ...{
      windows: newWindows
    }}
  }

  else if (action.type == "window__resize") {
    let newWindows = [...state.windows];
    newWindows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newWindows[key].viewSize = {
          x: action.size.x,
          y: action.size.y
        }
      }
    });
    return {...state, ...{
      windows: newWindows
    }}
  } 

  else {
    return {...state};
  }
}

export default reducer;