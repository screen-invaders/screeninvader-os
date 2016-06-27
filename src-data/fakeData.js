var faker = require('faker');
var fs = require('fs');
var words = require('./words.js');
var finalDirectory = require('./finalDirectory.js');

// Config
var config = {
  depth: 7,
  dirs: {
    min: 8,
    max: 8
  },
  files: {
    min: 10,
    max: 15
  },
  words: words,
  finalDirectory: {
    isSet: true,
    data: finalDirectory
  }
}

// Generate random directory
function newDirectory(path, depth, config){
  if (depth == 1){
    var words = config.words.short;
    var dirName = faker.random.arrayElement(words);
  } else if (depth == 2){
    var words = config.words.full;
    var dirName = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words);
  } else if (depth >= config.depth - 1){
    var words = config.words.full;
    var dirName = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words);
  } else {
    var words = config.words.compact.concat(config.words.important);
    var dirName = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words);
  }

  newPath = JSON.parse(JSON.stringify(path));
  newPath.push(dirName);
  return {
    path: newPath,
    name: dirName,
    type: "dir",
    dirType: faker.random.arrayElement(['locked', 'archive', 'normal', 'normal', 'normal'])
  }
}

// Generate random file
function newFile(path, depth, config){
  if (depth >= 2){
    var words = config.words.full.concat(["bieba", "Bieba", "biebaLtd", "BiebaLtd"]);
    var dirName = faker.random.arrayElement(words);
  } else {
    var words = config.words.full;
    var dirName = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words);
  }
  var type = faker.random.arrayElement(['txt', 'txt', 'txt','pdf', 'csv', 'csv']);
  var fileName = faker.random.arrayElement(words) + "_" + faker.random.arrayElement(words) + "." + type;
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
  var directory = newDirectory(path, depth, config);

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
  } else {
    // Generate
    // Generate subdirectories
    if (depth == 0){
      var amount = faker.random.number({min: config.dirs.min, max: config.dirs.max});
    } else if (depth === 1) {
      var amount = faker.random.number({min: 1, max: 1});
    } else if (depth === config.depth - 1) {
      var amount = faker.random.number({min: 1, max: 1});
    } else {
      var amount = faker.random.number({min: 2, max: 5});
    }
    if (depth <= config.depth){
      for (var i = 0; i < amount; i++){
        var childDirectory = directoryTree(directory.path, depth + 1, config);
        directory.children[childDirectory.name] = childDirectory; 
      }
    }

    // Add some file objects
    var amount = faker.random.number({min: config.files.min, max: config.files.max});
    for (var i = 0; i < amount; i++){
      var randomFile = newFile(directory.path, depth, config);
      directory.children[randomFile.name] = randomFile;
    }
  }

  return directory;
}

// Calling the functions
var filesystem = directoryTree([], 0, config);
fs.writeFileSync("./src/assets/data/filesystem.json", JSON.stringify(filesystem));