export default function explorer(state, action) {
  let newState;
  switch (action.type){      
    case "explorer__moveDown": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          return {...windowItem, ...{ 
            data: {
              ...windowItem.data,
              path: action.path
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
          let newPath = windowItem.data.path;
          newPath.pop();
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

    default:
      return 0;
  }
}