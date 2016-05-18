let actions = {
  window__tofront: function(windowData){
    return {
      type: "window__tofront",
      window: windowData
    }
  },
  window__close: function(windowData){
    return {
      type: "window__close",
      window: windowData
    }
  },
  window__resize: function(windowData, {x, y}){
    return {
      type: "window__resize",
      window: windowData,
      size: {
        x: x,
        y: y
      }
    }
  },
  window__move: function(windowData, {x, y}){
    return {
      type: "window__move",
      window: windowData,
      position: {
        x: x,
        y: y
      }
    }
  }
}

export default actions;