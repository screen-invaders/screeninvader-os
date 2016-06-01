var fs = require('fs');
var faker = require('faker');
var pdf = require('html-pdf');

function createDirectoryChildren(src){
  // random logic: which files and how many?
  var directory = [];
  var file, type, name;

  // How many files?
  var count = faker.random.number({min: 1, max: 5});

  for (var i = 0; i < count; i++){
    type = faker.random.arrayElement(['txt', 'txt', 'pdf']);

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
  types[file.type](file);
}

function createText(file){
  var content = faker.lorem.paragraphs(30)
  fs.writeFileSync('./build/filesystem/'.concat((file.path.join('/'))), content);
  return content;
}

function createPDF(file){
  var genHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body style="padding: 3rem;"><h1>' + file.path[file.path.length-1] + '</h1><p>' + faker.lorem.paragraphs(5) + ' </p><p>' + faker.lorem.paragraphs(5) + ' </p><p>' + faker.lorem.paragraphs(5) + ' </p></body></html>';
  var options = { format: 'Letter', "timeout": 6000000 };
  pdf.create(genHTML, options).toFile('./build/filesystem/'.concat((file.path.join('/'))), function(err, res) {
    if (err) return console.log(err);
    // console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}

module.exports = createDirectoryChildren;