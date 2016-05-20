import mainFileSystem from '../assets/data/dataDir.json';

let initialState = {
  user: {
    name: "IvMourik",
    password: "scotty"
  },
  overlay: {
    type: "",
  },
  login: {
    attempts: 2
  },
  searchQuery: "",
  windows: [

  ],
  menu: [
    {
      name: "Systeem",
      dropdown: [
        {
          name: "Configuratie"
        }
      ]
    },
    {
      name: "Programma's",
      dropdown: [
        {
          name: "Configuratiescherm"
        },
        {
          name: "Teksteditor"
        },
        {
          name: "Browser"
        },
        {
          name: "Fotobewerking"
        }
      ]
    },
    {
      name: "Belastingen"
    },
    {
      name: "Organisatie"
    }
  ],
  filesystem: mainFileSystem 
};

export default initialState;