export default function windows(state, action) {
  let newWindows;
  switch (action.type){
    case "window__open":
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
        type: "Verkenner", // "Zoeken" || "Verkenner" || "Tekstbestand" 
        data: {
          query: state.data.query || "AFM",
          folder: action.data.children,
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