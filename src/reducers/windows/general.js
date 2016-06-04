import newWindow from '../../models/window.js';

export default function general(state, action) {
  let newState;
  switch (action.type){      
    case "window__open":
      let type, windowInstance;
      let viewIndex = 500 + state.windows.length;
      switch (action.data.type) {
        case "dir": 
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "txt": 
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "pdf": 
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, path: action.data.path});
          return [...state.windows, windowInstance];
          break;
        case "search":
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, searchResult: [...state.search.current], query: action.data.query});
          return [...state.windows, windowInstance];
          break;
        case "browser":
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, url: action.url});
          return [...state.windows, windowInstance];
          break;
        case "modal":
          windowInstance = new newWindow(action.data.type, {viewIndex: viewIndex, content: action.data.content, submitText: action.data.submitText, size: {x: 400, y: 200}, constraints: {xmin: 400, xmax: 400, ymin: 200, ymax: 200}});
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
      newState = [...state.windows];
      let zIndex = 500;
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          zIndex = windowItem.viewIndex;
          return { ...windowItem, ...{viewIndex: 500 + newState.length} };
        }
        return {...windowItem};
      });


      newState = newState.map((windowItem, key)=>{
        if (windowItem.viewIndex > zIndex){
          return { ...windowItem, ...{viewIndex: windowItem.viewIndex - 1} }
        }
        return { ...windowItem };
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
      return 0;
  }
}