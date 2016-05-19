let reducer = function (state, action) {
  let newState = JSON.parse(JSON.stringify(state));
  
  if (action.type == "overlay__change2login"){
    newState.view.overlay.type = "login";
    return newState;
  }

  if (action.type == "overlay__change2none"){
    if (state.view.overlay.attempts == 0) {
      let newState = {
      view: {
        ...state.view,
        overlay: {
          ...state.view.overlay,
          type: ""}}};
    } else {
      newState.view.overlay.attempts--;
    }
    return newState;
  }

  else if (action.type == "search__enterQuery") {
    newState.view.searchQuery = action.query;
    return newState;
  }

  else if (action.type == "search__submitQuery") {
    var randX = Math.random() * (window.innerWidth - 620);
    var randY = Math.random() * (window.innerHeight - 500);
    var nextID = Math.random() * 0x10000;
    var newWindow = {
      id: nextID,
      type: "Zoeken",
      searchQuery: state.view.searchQuery,
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
    newState.view.windows.push(newWindow);
    newState.view.searchQuery = "";
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

    newState.view.windows.push(
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
    state.view.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.view.windows.splice(key,1);
      }
    })
    return newState;
  } 

  else if (action.type == "window__tofront") {
    state.view.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        var temp = newState.view.windows.splice(key,1);
        newState.view.windows.push(temp[0]);
        newState.view.windows.map((windowItem, key)=>{
          return state.view.windows[key].viewIndex = 500 + key;
        });
      }
    })
    return newState;
  }

  else if (action.type == "window__move") {
    state.view.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.view.windows[key].viewPos = {
          x: action.position.x,
          y: action.position.y
        }
      }
      return newState;
    })
  }

  else if (action.type == "window__resize") {
    state.view.windows.map((windowItem, key)=>{
      if (action.window.id == windowItem.id){
        newState.view.windows[key].viewSize = {
          x: action.size.x,
          y: action.size.y
        }
      }
      return newState;
    });
  } 

  else {
    return Object.assign({}, state);
  }
}

export default reducer;