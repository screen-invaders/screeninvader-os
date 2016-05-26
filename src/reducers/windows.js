export default function windows(state, action) {
  let newState;
  switch (action.type){
    case "window__open":
      console.log("Window reducer", state, action)

      let type;
      switch (action.data.type) {
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
        type: type,
        data: {
          query: (()=>{ return action.data.query ? action.data.query : null;})(),
          items: action.data.children,
          path: action.data.path
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
      return [...state.windows, newWindow];

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
      return state.windows || [];
  }
}