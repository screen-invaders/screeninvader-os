export function browser__changeUrl(windowData, url){
  return {
    type: "browser__changeUrl",
    windowData: windowData,
    url: url
  }
};