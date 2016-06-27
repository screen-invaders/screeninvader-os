import fileSystem from '../assets/data/filesystem.json';
import { menu } from '../assets/data/menu.yml';

let initialState = {
  user: {
    name: "IvMourik",
    displayName: "I. van Mourik",
    password: "250571"
  },
  overlay: {
    type: "admin",
  },
  login: {
    attempts: 5,
    password: ""
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
  filesystem: fileSystem 
};

export default initialState;