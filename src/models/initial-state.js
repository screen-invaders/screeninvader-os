import mainFileSystem from '../assets/data/dataDir.json';

let initialState = {
  user: {
    username: "IvMourik",
    password: "scotty"
  },
  view: {
    overlay: {
      type: "admin",
      attempts: 2          
    },
    searchQuery: "",
    windows: [

    ]
  },
  filesystem: mainFileSystem 
};

export default initialState;