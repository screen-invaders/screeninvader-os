var filenames = [
  { 
    name: "Investigation_BIEBA-Ltd", 
    type: "pdf",
    date: "1975-05-20T01:23:22.774Z"
  },
  { 
    name: "notities", 
    type: "txt",
    date: "1988-05-20T01:23:22.774Z"
  },
  { 
    name: "Money_Laundering", 
    type: "csv",
    date: "1999-05-20T01:23:22.774Z"
  }
];

function finalDirectory(path) {
  var directory = {};
  filenames.forEach(function(file, key){
    newPath = JSON.parse(JSON.stringify(path));
    newPath.push(file.name + "." + file.type);
    directory[file.name] = file;
    directory[file.name].path = newPath;
  })
  return directory
}

module.exports = finalDirectory;