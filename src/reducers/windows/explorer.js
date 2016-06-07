export default function explorer(state, action) {
  let newState;
  switch (action.type){      
    case "explorer__moveDown": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          let newHistory = [...windowItem.data.history].slice(windowItem.data.historyCursor, windowItem.data.history.length);
          return {...windowItem, ...{ 
            data: {
              ...windowItem.data,
              path: action.path,
              history: [
                action.path,
                ...newHistory
              ],
              historyCursor: 0
            }}
          }; 
        }
        return windowItem;
      });
      return newState;

    case "explorer__moveUp": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          let newHistory = [...windowItem.data.history].slice(windowItem.data.historyCursor, windowItem.data.history.length);
          let newPath = [...windowItem.data.path];
          newPath.pop();
          return {...windowItem, ...{ 
            data: {
              ...windowItem.data,
              path: newPath,
              history: [
                newPath,
                ...newHistory
              ],
              historyCursor: 0
            }}
          }; 
        }
        return windowItem;
      });
      return newState;

    case "explorer__changeViewType": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          return {
            ...windowItem, 
            data: {
              ...windowItem.data, 
              viewType: action.viewType
            }
          }; 
        }
        return windowItem;
      })
      return newState;

    case "explorer__back": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          let newCursor = windowItem.data.historyCursor;
          if (windowItem.data.historyCursor < windowItem.data.history.length - 1){
            newCursor = windowItem.data.historyCursor + 1;
          }
          return { ...windowItem, ...{
            data: {
              ...windowItem.data,
              path: windowItem.data.history[newCursor], 
              historyCursor: newCursor
            }}};
        }
        return windowItem;
      });
      return newState

    case "explorer__forward": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          let newCursor = windowItem.data.historyCursor;
          if (windowItem.data.historyCursor > 0){
            newCursor = windowItem.data.historyCursor - 1;
          }
          return { ...windowItem, ...{
            data: {
              ...windowItem.data,
              path: windowItem.data.history[newCursor], 
              historyCursor: newCursor
            }}};
        }
        return windowItem;
      });
      return newState

    default:
      return 0;
  }
}