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
          action.query
        ]
      }};
    default:
      return state;
  }
}