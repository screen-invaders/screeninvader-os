export default function browser(state, action) {
  let newState;
  switch (action.type){ 
  //   case "browser__changeUrl": 
  //     newState = [...state.windows];
  //     newState = newState.map((windowItem, key)=>{
  //       if (action.window.id == windowItem.id){
  //         return { ...windowItem, ...{ 
  //           data: {
  //             ...windowItem.data,
  //             url: action.url
  //           }
  //         }};
  //       }
  //       return windowItem;
  //     });
  //     return newState

  //   case "browser__submitUrl": 
  //     newState = [...state.windows];
  //     newState = newState.map((windowItem, key)=>{
  //       if (action.window.id == windowItem.id){
  //         let newHistory = [...windowItem.data.history].slice(windowItem.data.historyCursor, history.length);
  //         newHistory.unshift(action.url);
  //         return { ...windowItem, ...{
  //           data: {
  //             ...windowItem.data,
  //             history: newHistory,
  //             historyCursor: 0
  //         }}};
  //       }
  //       return windowItem;
  //     });
  //     return newState

  //   case "browser__back": 
  //     newState = [...state.windows];
  //     newState = newState.map((windowItem, key)=>{
  //       if (action.window.id == windowItem.id){
  //         let newCursor = windowItem.data.historyCursor;
  //         if (windowItem.data.historyCursor < windowItem.data.history.length - 1){
  //           newCursor = windowItem.data.historyCursor + 1;
  //         }
  //         return { ...windowItem, ...{
  //           data: {
  //             ...windowItem.data,
  //             url: windowItem.data.history[newCursor], 
  //             historyCursor: newCursor
  //           }}};
  //       }
  //       return windowItem;
  //     });
  //     return newState

  //   case "browser__forward": 
  //     newState = [...state.windows];
  //     newState = newState.map((windowItem, key)=>{
  //       if (action.window.id == windowItem.id){
  //         let newCursor = windowItem.data.historyCursor;
  //         if (windowItem.data.historyCursor > 0){
  //           newCursor = windowItem.data.historyCursor - 1;
  //         }
  //         return { ...windowItem, ...{
  //           data: {
  //             ...windowItem.data,
  //             url: windowItem.data.history[newCursor], 
  //             historyCursor: newCursor
  //           }}};
  //       }
  //       return windowItem;
  //     });
  //     return newState

    default:
      return 0;
  }
}