export function browser__changeUrl(windowData, e){
  return {
    type: "browser__changeUrl",
    window: windowData,
    url: e.target.value
  }
};

export function browser__submitUrl(windowData, url){
  return {
    type: "browser__submitUrl",
    window: windowData,
    url: url
  }
};

export function browser__back(windowData){
  return {
    type: "browser__back",
    window: windowData
  }
};

export function browser__forward(windowData){
  return {
    type: "browser__forward",
    window: windowData
  }
};