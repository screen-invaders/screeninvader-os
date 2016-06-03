  class newWindow {
  constructor(type, options){
    this.id = Math.random() * 0x10000;
    this.type = type;
    this.data = {
      query: options.query,
      searchResult: options.searchResult,
      path: options.path,
      url: options.url,
      content: options.content,
      viewType: "list"
    };
    this.history = [];
    this.focus = 0;
    this.viewPos = {
      x: Math.random() * (window.innerWidth - 800),
      y: Math.random() * (window.innerHeight - 500)
    };
    this.viewSize = {
      x: 800,
      y: 500
    };
    this.viewIndex = 600;
  }
}

export default newWindow;