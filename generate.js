var faker = require('faker');

function createDirectoryChildren(path){
  // random logic: which files and how many?

  var directory = {};
  var type = 'txt';
  var count = faker.random.number({min: 5, max: 20});
  var name;

  for (var i = 0; i < count; i++){
    name = faker.system.commonFileName("txt");
    directory[name] = createFile(name, path, type)
    console.log(directory[name]);
  }

  return directory;
}

function createFile(name, path, type){
  var file = {
    path: {
        'unsplit': path.join('/'),
        'splitted': path
    },
    name: name,
    type: type
  };

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
  // This should create actual content of files, to be outputted to the filesystem later.
  var content = "some string";
  return content;
}

createDirectoryChildren(["some", "path"]);

