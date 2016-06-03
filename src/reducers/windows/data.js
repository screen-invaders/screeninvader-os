export default function data(state, action) {
  let newState;
  switch (action.type){      
    case "data__receive": 
      console.log("reducer")
      newState = [...state.windows];
      newState = newState.map((windowItem, key)=>{
        if (action.window.id == windowItem.id){
          return { ...windowItem, ...{ 
            data: {
              ...windowItem.data,
              content: action.content
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