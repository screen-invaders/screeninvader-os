export function search__enterQuery(e){
  return {
    type: "search__enterQuery",
    query: e.target.value
  }
};

export function search__submitQuery(query){
  return {
    type: "search__submitQuery",
    query: query
  }
};

export function search__searchQuery(query, filesystem){
  return {
    type: "search__searchQuery",
    query: query,
    filesystem: filesystem
  }
};

export function search__eraseHistory(){
  return {
    type: "search__eraseHistory"
  }
};


