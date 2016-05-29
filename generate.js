var faker = require('faker');
var fs = require('fs');

function createDirectoryChildren(src){
  // random logic: which files and how many?
  var directory = {};
  var file, type, name;

  // How many files?
  var count = faker.random.number({min: 1, max: 3});

  for (var i = 0; i < count; i++){
    // Which type?
    type = "txt";
    name = faker.system.commonFileName(type);
    name = name.replace(/\//, "");
    path = JSON.parse(JSON.stringify(src));
    path.push(name);
    file = {
      name: name,
      path: path,
      type: type
    }
    
    // create file (side-effect)
    createFile(file);

    // create meta-data
    directory[file.name] = file;
  }

  // console.log(directory);

  return directory;
}

function createFile(file){
  // routing on filetype
  var types = {
    txt: createText,
    // 'pdf': createPDF,
    // 'img': createImage,
    // 'code': createCode,
    // 'video': createVideo,
    // 'audio': createAudio,
    // 'executable': createExe
  }
  types[file.type](file);
}

function createText(file){
  // Creates file in side effect
  var data = faker.lorem.paragraph(10)

  fs.writeFileSync("./.generate/".concat((file.path.join('/'))), data);
}

module.exports = createDirectoryChildren;

// createDirectoryChildren([".generate"]);

