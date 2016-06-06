  class newWindow {
  constructor(type, options){
    this.id = Math.random() * 0x10000;
    this.type = type;
    this.data = {
      path: options.path,
      url: options.url,
      query: options.query,
      content: options.content,
      searchResult: options.searchResult,
      viewType: options.viewType || "list",
      submitText: options.submitText,
      history: [],
      historyCursor: 0
    };
    this.focus = 0;
    this.viewPos = {
      x: (options.offset && options.offset.x) || (Math.random() * (window.innerWidth - 800)),
      y: (options.offset && options.offset.x) || (Math.random() * (window.innerHeight - 500))
    };
    this.viewSize = {
      x: (options.size && options.size.x) || 800,
      y: (options.size && options.size.y) || 500
    };
    this.constraints = {
      xmin: (options.constraints && options.constraints.xmin) || 500,
      ymin: (options.constraints && options.constraints.ymin) || 350,
      xmax: (options.constraints && options.constraints.xmax) || 1000,
      ymax: (options.constraints && options.constraints.ymax) || 600
    };
    this.viewIndex = options.viewIndex;
  }
}

export default newWindow;