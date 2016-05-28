export function window__open(type, itemData, query){
  return {
    type: "window__open",
    data: {
      type: type,
      path: itemData && itemData.path,
      children: itemData && itemData.children,
      content: itemData && itemData.content,
      query: query
    }
  }
};

export function window__updatePath(windowData, path){
  return {
    type: "window__updatePath",
    window: windowData,
    path: path
  }
};

export function window__tofront(windowData){
  return {
    type: "window__tofront",
    window: windowData
  }
};

export function window__close(windowData){
  return {
    type: "window__close",
    window: windowData
  }
};

export function window__resize(windowData, {x, y}){
  return {
    type: "window__resize",
    window: windowData,
    size: {
      x: x,
      y: y
    }
  }
};

export function window__move(windowData, {x, y}){
  return {
    type: "window__move",
    window: windowData,
    position: {
      x: x,
      y: y
    }
  }
};