export default function browser(state, action) {
  let newState;
  switch (action.type){ 
    case "browser__changeUrl": 
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          return { ...windowItem, ...{ 
            data: {
              ...windowItem.data,
              url: action.url
            }
          }};
        }
        return windowItem;
      });
      return newState     
    default:
      return 0;
  }
}