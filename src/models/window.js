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
      history: []
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
    this.viewIndex = 600;
  }
}

export default newWindow;