export function browser__changeUrl(windowData, e){
  console.log(windowData, e.target.value)
  return {
    type: "browser__changeUrl",
    window: windowData,
    url: e.target.value
  }
};