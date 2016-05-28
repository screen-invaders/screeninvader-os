import newWindow from '../models/window.js';

export default function windows(state, action) {
  let newState;
  switch (action.type){
    case "window__open":

      let type, windowInstance;
      switch (action.data.type) {
        case "dir": 
          windowInstance = new newWindow("Verkenner", action.data.children, action.data.path, null, null);
          break;
        case "txt": 
          windowInstance = new newWindow("Tekstbestand", null, action.data.path, null, action.data.content);
          break;
        case "search":
          windowInstance = new newWindow("Zoeken", state.search.current, null, action.data.query, null);
          break;
      }
      return [...state.windows, windowInstance];

    case "window__moveDown": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          return {...windowItem, ...{ 
            data: {
              ...windowItem.data,
              path: { ...action.path }
            }}
          }; 
        }
        return windowItem;
      });
      return newState;

    case "window__moveUp": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          let newPath = { ...windowItem.data.path };
          return {...windowItem, ...{ 
            data: {
              ...windowItem.data,
              path: newPath
            }}
          }; 
        }
        return windowItem;
      });
      return newState;

    case "window__close":
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          newState.splice(key,1);
        }
      })
      return newState;

    case "window__tofront": 
      newState = [...state.windows];
      newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          var temp = newState.splice(key,1);
          newState.push(temp[0]);
          newState.map((windowItem, key)=>{
            return newState[key].viewIndex = 500 + key;
          });
        }
      })
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
      return [ ...state.windows ] || [];
  }
}