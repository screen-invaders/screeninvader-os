var faker = require('faker');
var fs = require('fs');
var words = require('./words.js');
var finalDirectory = require('./finalDirectory.js');

// Config
var config = {
  depth: 4,
  dirs: {
    min: 1,
    max: 5
  },
  files: {
    min: 1,
    max: 5
  },
  words: words,
  finalDirectory: {
    isSet: true,
    data: finalDirectory
  }
}

// Generate random directory
function directory(path, config){
  var dirName = faker.random.arrayElement(config.words);
  newPath = JSON.parse(JSON.stringify(src));
  newPath.push = dirName;
  return {
    path: newPath,
    name: dirName,
    type: "dir",
    dirType: faker.random.arrayElement(['locked', 'archive', 'normal'])
  }
}

// Generate random file
function file(path, config){
  var fileName = faker.random.arrayElement(config.words);
  newPath = JSON.parse(JSON.stringify(src));
  newPath.push = fileName;
  return {
    path: newPath,
    name: dirName,
    type: faker.random.arrayElement(['txt', 'txt', 'pdf']),
    dirType: faker.random.arrayElement(['locked', 'archive', 'normal'])
  }
}

// Generate tree
function directoryTree(path, depth, config){
  var directory = directory(path, config);

  if ((finalDirectory.isSet === true) && (depth === config.depth)){
    // output a correct finalDirectory
  }

  // Recursivity
  if (depth < config.depth){
    for (var i = 0; i < config.dirs.max; i++){
      directory.children = directoryTree(path, depth + 1, config);
    }
  }

  // Plain simple file objects
  for (var i = 0; i < config.files.max; i++){
    direct.children.push = file(path, config);
  }

  return directory;
}

// Calling the functions
var filesystem = directoryTree([], config);
console.log(JSON.stringify(filesystem));
