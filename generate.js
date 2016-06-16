var fs = require('fs');
var faker = require('faker');
var pdf = require('html-pdf');

function createDirectoryChildren(src){
  
  var finalDirectory = {
    "Investigation_Bibal.pdf": {
      "name": "controle_Opsporingsdienst.pdf",
      "path": [
        "AFM",
        "1968-323862371018567",
        "DOSSIER-23772205149970",
        "controle_Opsporingsdienst.pdf"
        ],
      "type": "pdf",
      "date": "1975-05-20T01:23:22.774Z"
    },
    "Malta_Chamber_of_Commerce.txt": {
      "name": "EMM_Anti.txt",
      "path": [
        "AFM",
        "1968-323862371018567",
        "DOSSIER-23772205149970",
        "EMM_Anti.txt"
      ],
      "type": "txt",
      "date": "2001-10-18T05:24:11.141Z"
    },
    "Money_Laundering.txt": {
      "name": "Laundering._Amsterdam.txt",
      "path": [
        "AFM",
        "1968-323862371018567",
        "DOSSIER-23772205149970",
        "Laundering._Amsterdam.txt"
      ],
      "type": "txt",
      "date": "1981-12-14T04:14:41.473Z"
    }
  }

  var words = [
    "AFM",
    "AMLC",
    "A01C",
    "BES",
    "BFT",
    "BOOM",
    "BVI",
    "CJIB",
    "CN",
    "CTE/PF",
    "CT",
    "Infobox",
    "CWI",
    "DLR",
    "DNB",
    "DWI",
    "EC",
    "EMM",
    "EMPACT",
    "ESW",
    "EU",
    "FAT",
    "F",
    "FEC",
    "FinEC",
    "FIU",
    "FIOD",
    "FP",
    "GoAML",
    "iCOV",
    "ILT/IOD",
    "Autoriteit",
    "Financiële",
    "Markten",
    "Anti",
    "Money",
    "Laundering",
    "Centre,",
    "onderdeel",
    "van",
    "de",
    "FIOD",
    "Administratieve",
    "organisatie",
    "interne",
    "controle",
    "BES",
    "eilanden",
    "Caribisch",
    "Nederland",
    "Bonaire.",
    "Sint",
    "Eustatiusen",
    "Saba",
    "Bureau",
    "Financieel",
    "Toezicht",
    "Bureau",
    "Ontnemingswetgeving",
    "Openbaar",
    "Ministerie",
    "Basisvoorziening",
    "Informatie,",
    "applicatie",
    "politie",
    "Centraal",
    "Justitieel",
    "Incasso",
    "Bureau",
    "Caribisch",
    "Nederland",
    "Contraterrorisme",
    "proliferatiefmanciering",
    "team",
    "binnen",
    "FlU-Nederland",
    "Contraterrorisme",
    "Infobox",
    "Cluster",
    "Werk",
    "Inkomen",
    "onderdeel",
    "gemeente",
    "Rotterdam",
    "Dienst",
    "Landelijke",
    "Recherche",
    "onderdeel",
    "Landelijke",
    "Eenheid",
    "politie",
    "Nederlandsche",
    "Bank",
    "Dienst",
    "Werk",
    "Inkomen",
    "onderdeel",
    "gemeente",
    "Amsterdam",
    "Europese",
    "Commissie,",
    "uitvoerend",
    "orgaan",
    "EU",
    "Expertisecentrum",
    "Mensenhandel",
    "Mensensmokkel",
    "European",
    "Multidisciplinary",
    "Platform",
    "Against",
    "Criminal",
    "Europese",
    "Unie",
    "Financial",
    "Action",
    "Task",
    "Force",
    "Financieel",
    "Expertise",
    "Centrum",
    "Programma",
    "Financieel",
    "Economische",
    "Criminaliteit",
    "Financial",
    "Intelligence",
    "Unit",
    "Fiscale",
    "Inlichtingen-",
    "Opsporingsdienst",
    "Functioneel",
    "Parket,",
    "onderdeel",
    "OM",
    "Government",
    "Anti-Money",
    "Laundering.",
    "ICT",
    "applicatie",
    "gebouwd",
    "door",
    "UNODC",
    "Infobox",
    "Crimineel",
    "Onverklaarbaar",
    "Vermogen",
    "Inspectie",
    "Leefomgeving",
    "Transport",
    "Inlichtingen",
    "Opsporingsdienst",
    "Investigation",
    "Investigation",
    "investigation",
    "investigation",
    "Bibal",
    "bibal",
    "Andrea",
    "Andrea",
    "andrea",
    "andrea"
  ];

  // random logic: which files and how many?
  var directory = [];
  var file, type, name, date;
  // How many files?
  var count = faker.random.number({min: 1, max: 5});

  // Loop to generate files
  for (var i = 0; i < count; i++){
    type = faker.random.arrayElement(['txt', 'txt', 'pdf']);

    name = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words) + "." + type;
    name = name.replace(/\//, '');

    path = JSON.parse(JSON.stringify(src));
    path.push(name);

    date = faker.date.past(50);

    file = {
      name: name,
      path: path,
      type: type,
      date: date
    }
    
    // create meta-data
    directory.push(file);
  }

  return directory;
}

module.exports = createDirectoryChildren;