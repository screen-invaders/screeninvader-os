var fs = require('fs');
var faker = require('faker');
var pdf = require('html-pdf');

function createDirectoryChildren(src){
  // random logic: which files and how many?
  var directory = [];
  var file, type, name;

  // How many files?
  var count = faker.random.number({min: 1, max: 3});

  for (var i = 0; i < count; i++){
    type = faker.random.arrayElement(['txt', 'pdf']);

    name = faker.system.commonFileName(type);
    name = name.replace(/\//, '');

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
    directory.push(file);
  }

  return directory;
}

function createFile(file){
  // routing on filetype
  var types = {
    txt: createText,
    pdf: createPDF,
    // 'img': createImage,
    // 'code': createCode,
    // 'video': createVideo,
    // 'audio': createAudio,
    // 'executable': createExe
  }

  content = types[file.type](file);

  // Writing in a side effect
  fs.writeFileSync('./build/filesystem/'.concat((file.path.join('/'))), content);
}

function createText(file){
  var content = faker.lorem.paragraph(30)
  return content;
}

function createPDF(file){
 
}

module.exports = createDirectoryChildren;