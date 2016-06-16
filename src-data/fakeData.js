var faker = require('faker');
var fs = require('fs');
var words = require('./words.js');
var finalDirectory = require('./finalDirectory.js');

// Config
var config = {
  depth: 3,
  dirs: {
    min: 4,
    max: 10
  },
  files: {
    min: 3,
    max: 10
  },
  words: words,
  finalDirectory: {
    isSet: true,
    data: finalDirectory
  }
}

// Generate random directory
function newDirectory(path, config){
  var dirName = faker.random.arrayElement(config.words) + "_" + faker.random.arrayElement(config.words);
  newPath = JSON.parse(JSON.stringify(path));
  newPath.push(dirName);
  return {
    path: newPath,
    name: dirName,
    type: "dir",
    dirType: faker.random.arrayElement(['locked', 'archive', 'normal'])
  }
}

// Generate random file
function newFile(path, config){
  var type = faker.random.arrayElement(['txt', 'txt', 'pdf', 'csv']);
  var fileName = faker.random.arrayElement(config.words) + "_" + faker.random.arrayElement(config.words) + "." + type;
  newPath = JSON.parse(JSON.stringify(path));
  newPath.push(fileName);
  return {
    path: newPath,
    name: fileName,
    type: type,
    date: date = faker.date.past(50)
  }
}

// Generate tree
function directoryTree(path, depth, config){
  var directory = newDirectory(path, config);

  if (depth == 0){
    directory.name = "root",
    directory.path = [];
  }

  // Generate Children
  if (!directory.children){
    directory.children = {};
  }

  // Return Final Directory and stop generation
  if ((config.finalDirectory.isSet === true) && (depth === config.depth)){
    directory.children = finalDirectory(directory.path);
  } 
  else {
    // Generate
    // Generate subdirectories
    var amount = faker.random.number({min: config.dirs.min, max: config.dirs.max});
    if (depth <= config.depth){
      for (var i = 0; i < amount; i++){
        var childDirectory = directoryTree(directory.path, depth + 1, config);
        directory.children[childDirectory.name] = childDirectory; 
      }
    }

    // Add some file objects
    var amount = faker.random.number({min: config.files.min, max: config.files.max});
    for (var i = 0; i < amount; i++){
      var randomFile = newFile(directory.path, config);
      directory.children[randomFile.name] = randomFile;
    }
  }

  return directory;
}

// Calling the functions
var filesystem = directoryTree([], 0, config);
fs.writeFileSync("./src/assets/data/filesystem.json", JSON.stringify(filesystem));