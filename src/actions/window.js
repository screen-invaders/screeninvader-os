export function window__open(folder, searchQuery){
  return {
    type: "window__open",
    windowType: folder.type
    data: {
      type: folder.type
      folder: folder.type,
      filesystemPos: folder.path,
      searchQuery: searchQuery
    } 
    window: windowData
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