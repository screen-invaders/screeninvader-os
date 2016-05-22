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
          name: "Over dit Intranet"
        },
        {
          name: "Uitloggen"
        },
        {
          name: "Herstarten"
        },
        {
          name: "Afsluiten"
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
  searchDropdown: [
    {
      name: "Zoekinstellingen"
    },
    {
      name: "Pas filters toe"
    },
    {
      name: "Laatste Zoekopdracht"
    },
    {
      name: "Recente zoekopdrachten"
    },
    {
      name: "Wis zoekgeschiedenis"
    }
  ],
  filesystem: mainFileSystem 
};

export default initialState;