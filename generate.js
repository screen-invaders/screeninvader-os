var faker = require('faker');

function createDirectoryChildren(path){
  // random logic: which files and how many?
  var directory = {};
  var file;
  var type;

  // How many files?
  var count = faker.random.number({min: 5, max: 20});

  for (var i = 0; i < count; i++){
    type = "txt";
    file = {
      name: faker.system.commonFileName(type),
      path: path,
      type: type
    }
    directory[name] = createFileContent(name, path, type)
  }

  return directory;
}

function createFileContent(file){
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

  file.content = types[type]();

  return file;
}

function createText(){
  // Returns file meta-data
  // Screates file as side effect
  var content = "some string";
  return content;
}

createDirectoryChildren(["some", "path"]);

