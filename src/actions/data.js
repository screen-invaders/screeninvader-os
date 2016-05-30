export function data__receiveData(response, windowData, dispatch){
  return {
    type: "data__receiveData",
    window: windowData,
    content: response
  }
};

export function data__getData(windowData, dispatch){
  var oReq = new XMLHttpRequest();
  
  oReq.addEventListener("load", onData);
  oReq.open("GET", "./filesystem" + windowData.data.path.join("/"));
  oReq.send();

  function onData(){
    dispatch(data__receiveData(this.responseText, windowData, dispatch))
  }

  return {
    type: "data__getData",
    window: windowData,
    isFetching: true
  }
};