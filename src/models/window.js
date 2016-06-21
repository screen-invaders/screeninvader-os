  class newWindow {
  constructor(type, options){
    this.id = Math.random() * 0x10000;
    this.type = type;
    this.focus = 0;
    this.viewPos = {
      x: (options.offset && options.offset.x) || (Math.random() * (window.innerWidth - 1000)),
      y: (options.offset && options.offset.x) || (Math.random() * (window.innerHeight - 600))
    };
    this.viewSize = {
      x: (options.size && options.size.x) || 1000,
      y: (options.size && options.size.y) || 600
    };
    this.constraints = {
      xmin: (options.constraints && options.constraints.xmin) || 500,
      ymin: (options.constraints && options.constraints.ymin) || 350,
      xmax: (options.constraints && options.constraints.xmax) || 2000,
      ymax: (options.constraints && options.constraints.ymax) || 1600
    };
    this.viewIndex = options.viewIndex;

    // Window Types

    if (type == "modal"){
      this.viewPos = {
        x: (options.offset && options.offset.x) || ((window.innerWidth / 2) - 200),
        y: (options.offset && options.offset.x) || ((window.innerHeight / 2) - 100)
      };
      this.data = {
        content: options.content,
        submitText: options.submitText,
      };
    }

    if (type == "txt"){
      this.data = {
        path: options.path,
        content: options.content,
      };
    }

    if (type == "csv"){
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
      this.data = {};
      this.data.tabs = [{
        id: Math.random() * 0x10000,
        title: "Breeze Mail",
        url: "Breeze Mail",
        history: [],
        historyCursor: 0, 
        frozen: 1,
        active: 0
      },
      {
        id: Math.random() * 0x10000,
        title: "Tabloid news",
        url: "Tabloid news",
        history: [],
        historyCursor: 0,
        frozen: 1,
        active: 0
      },
      {
        id: Math.random() * 0x10000,
        title: "Chamber of Commerce",
        url: "http://wwww.chamberofcommerce.mt/",
        history: ["./malta_coc/index.html"],
        historyCursor: 0,
        frozen: 1,
        active: 1
      }];
    }
  }
}

export default newWindow;