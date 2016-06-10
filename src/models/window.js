  class newWindow {
  constructor(type, options){
    this.id = Math.random() * 0x10000;
    this.type = type;
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

    // Window Types

    if (type == "txt"){
      this.data = {
        path: options.path,
        content: options.content,
      };
    }

    if (type == "pdf"){
      this.data = {
        path: options.path
      };
    }

    if (type == "dir"){
      this.data = {
        path: options.path,
        viewType: options.viewType || "list",
        history: [],
        historyCursor: 0
      };
      
      if (options.path){
        this.data.history.push(options.path); 
      }
    }

    if (type == "search"){
      this.data = {
        query: options.query,
        searchResult: options.searchResult,
        viewType: options.viewType || "list",
      };
    }

    if (type == "browser"){
      this.data.currentTab = 2;
      this.data.tabs = [{
        id: Math.random() * 0x10000,
        url: "Breeze mail",
        history: [],
        historyCursor: 0
      },
      {
        id: Math.random() * 0x10000,
        url: "Tabloid news",
        history: [],
        historyCursor: 0
      },
      {
        id: Math.random() * 0x10000,
        url: options.url,
        history: [],
        historyCursor: 0
      }];
    }
  }
}

export default newWindow;