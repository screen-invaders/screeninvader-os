  class newWindow {
  constructor(type, items, path, query, content){
    this.id = Math.random() * 0x10000;
    this.type = type;
    this.data = {
      query: query,
      items: items,
      path: path,
      content: content
    };
    this.viewPos = {
      x: Math.random() * (window.innerWidth - 620),
      y: Math.random() * (window.innerHeight - 500)
    };
    this.viewSize = {
      x: 600,
      y: 400
    };
    this.viewIndex = 600;
  }
}

export default newWindow;