import mainFileSystem from '../assets/data/dataDir.json';
import { menu } from '../assets/data/menu.yml';
import { searchDropdown } from '../assets/data/searchDropdown.yml';

let initialState = {
  user: {
    name: "IvMourik",
    displayName: "I. van Mourik",
    password: "scotty"
  },
  overlay: {
    type: "",
  },
  login: {
    attempts: 2
  },
  search: {
    query: "",
    history: [

    ],
    current: {}
  },
  windows: [

  ],
  menu: menu,
  searchDropdown: searchDropdown,
  filesystem: mainFileSystem 
};

export default initialState;