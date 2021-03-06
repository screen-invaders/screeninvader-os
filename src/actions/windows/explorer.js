export function explorer__moveDown(windowData, path){
  return {
    type: "explorer__moveDown",
    window: windowData,
    path: path
  }
};

export function explorer__moveUp(windowData, path){
  return {
    type: "explorer__moveUp",
    window: windowData
  }
};

export function explorer__back(windowData){
  return {
    type: "explorer__back",
    window: windowData
  }
};

export function explorer__forward(windowData){
  return {
    type: "explorer__forward",
    window: windowData
  }
};

export function explorer__changeViewType(windowData, viewType){
  return {
    type: "explorer__changeViewType",
    window: windowData,
    viewType: viewType
  }
};