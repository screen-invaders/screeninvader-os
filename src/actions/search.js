export function search__submitQuery(){
  return {
    type: "search__submitQuery"
  }
};

export function search__enterQuery(e){
  return {
    type: "search__enterQuery",
    query: e.target.value
  }
};