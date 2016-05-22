// Needs dispatcher
function login(state, action) {
  switch (action.type) {
    case "login__attempt":
      return {...state, ...{
          attempts: state.login.attempts - 1
        }
      };
    default:
      return state;
  }
}

function overlay(state, action) {
  switch (action.type) {
    case "overlay__change2login":
      return {...state, ...{
        type: "login"
      }};
    case "overlay__change2none":
      return {...state, ...{
        type: ""
      }};
    default:
      return state;
  }
}

function search(state, action) {
  switch (action.type){
    case "search__enterQuery":
      return {...state, ...{
        query: action.query
      }};
    case "search__submitQuery":
      return {...state, ...{
        query: "",
        history: [
          ...state.history,
          action.query
        ]
      }};
    default:
      return state;
  }
}

function windows(state, action) {
  let newWindows;
  switch (action.type){
    case "window__open":
      switch (action.folder.type) {
        case "dir": 
          type = "Verkenner";
          break;
        case "txt": 
          type = "Tekstbestand";
          break;
        case "search":
          type = "Zoeken";
          break;
      }

      var newWindow = {
        id: Math.random() * 0x10000,
        type: "Verkenner", // "Zoeken" || "Verkenner" || "Tekstbestand" 
        data: {
          searchQuery: state.searchQuery || "AFM",
          folder: action.folder,
          filesystemPos: action.folder.path
        },
        viewPos: {
          x: Math.random() * (window.innerWidth - 620),
          y: Math.random() * (window.innerHeight - 500)
        },
        viewSize: {
          x: 600,
          y: 400
        },
        viewIndex: 600
      };
      return [...state, newWindow];

    case "window__close":
      newWindows = [...state];
      newWindows.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newWindows.splice(key,1);
        }
      })
      return newWindows;

    case "window__tofront": 
      newWindows = [...state];
      newWindows.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          var temp = newWindows.splice(key,1);
          newWindows.push(temp[0]);
          newWindows.map((windowItem, key)=>{
            return newWindows[key].viewIndex = 500 + key;
          });
        }
      })
      return newWindows;
  

    case "window__move": 
      newWindows = [...state];
      newWindows.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newWindows[key].viewPos = {
            x: action.position.x,
            y: action.position.y
          }
        }
      })
      return newWindows;

    case "window__resize":
      newWindows = [...state];
      newWindows.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newWindows[key].viewSize = {
            x: action.size.x,
            y: action.size.y
          }
        }
      });
      return newWindows
    default:
      return state || [];
  }
}

export default function reducer(state = {}, action) {
  return {
    login: login(state.login, action),
    overlay: overlay(state.overlay, action),
    search: search(state, action),
    windows: windows(state.window, action),
    menu: (state => state)(state.menu),
    user: (state => state)(state.user),
    searchDropdown: (state => state)(state.searchDropdown),
    filesystem: (state => state)(state.filesystem)
  }
}