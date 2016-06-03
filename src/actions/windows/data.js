export function data__receive(response, windowData, dispatch){
  return {
    type: "data__receive",
    window: windowData,
    content: response
  }
};

export function data__get(windowData, dispatch){
  var oReq = new XMLHttpRequest();
  
  oReq.addEventListener("load", onData);
  oReq.open("GET", "./filesystem/" + windowData.data.path.join("/"));
  oReq.send();

  function onData(){
    dispatch(data__receive(this.responseText, windowData, dispatch))
  }

  return {
    type: "data__get",
    window: windowData,
    isFetching: true
  }
};