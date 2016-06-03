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