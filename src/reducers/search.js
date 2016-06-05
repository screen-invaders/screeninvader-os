export default function search(state, action) {
  switch (action.type){
    case "search__enterQuery":
      return {...state, ...{
        query: action.query
      }};
    case "search__submitQuery":
      return {...state, ...{
        query: "",
        history: [
          ...state.history,
          { name: action.query,
            display: "small" }
        ]
      }};
    case "search__searchQuery":
      // Defining search function
      function search(query, folder){
        let result = [];
        for (var item in folder) {
          if (folder.hasOwnProperty(item)) {
            if (result.length > 150){
              break;
            }
            if (folder[item].name.indexOf(query) != -1){
              result.push(folder[item]);
            }
            if (folder[item].children) {
              result.push(...search(query, folder[item].children));
            }
          }
        };

        result = result.sort((a, b)=>{
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        return result;
      }

      let current = search(action.query, action.filesystem.children);

      // return result
      return {...state, ...{
        current: current
      }};
    default:
      return {...state};
  }
}