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
      viewType: "list",
      history: []
    };
    this.focus = 0;
    this.viewPos = {
      x: ((window.innerWidth - 400) / 2 ),
      y: ((window.innerHeight - 200) / 2)
    };
    this.viewSize = {
      x: 400,
      y: 200
    };
    this.viewIndex = 600;
  }
}

export default newWindow;