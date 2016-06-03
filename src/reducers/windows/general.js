import newWindow from '../../models/window.js';

export default function general(state, action) {
  let newState;
  switch (action.type){      
    case "window__open":
      let type, windowInstance;

      switch (action.data.type) {
        case "dir": 
          windowInstance = new newWindow(action.data.type, {path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "txt": 
          windowInstance = new newWindow(action.data.type, {path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "pdf": 
          windowInstance = new newWindow(action.data.type, {path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "search":
          windowInstance = new newWindow(action.data.type, {searchResult: [...state.search.current], query: action.data.query});
          return [...state.windows, windowInstance];
          break;
        case "browser":
          windowInstance = new newWindow(action.data.type, {url: action.url});
          return [...state.windows, windowInstance];
          break;
        default:
          return 0
      }

    case "window__close":
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newState.splice(key,1);
        }
      })
      return newState;

    case "window__tofront": 
      // Not immutable! Children are overwritten.
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          var temp = newState.splice(key,1);
          newState.push(temp[0]);
        }
      })
      newState.map((windowItem, key)=>{
        windowItem.viewIndex = 500 + key;
        windowItem.focus = 0;
        return windowItem;
      });
      if (newState.length != 0){
        newState[newState.length-1].focus = 1;
      }
      return newState;

    case "window__move": 
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newState[key].viewPos = {
            x: action.position.x,
            y: action.position.y
          }
        }
      })
      return newState;

    case "window__resize":
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newState[key].viewSize = {
            x: action.size.x,
            y: action.size.y
          }
        }
      });
      return newState
    
    default:
      return 0;
  }
}