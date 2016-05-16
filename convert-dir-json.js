var fs = require('fs'),
    path = require('path'),
    util = require('util');


function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            if (child != ".DS_Store") {
                return dirTree(filename + '/' + child);
            }
        });
        info.children = info.children.filter(function(obj){if (obj != undefined) {return true;}});
    } else {
        info.type = "file";
        info.contents = fs.readFileSync(filename, {encoding: "utf8"});
    }

    return info;
}

if (module.parent == undefined) {
    // console.log(util.inspect(dirTree(process.argv[2]), false, null));
    fs.writeFileSync(process.argv[3], JSON.stringify(dirTree(process.argv[2])));
}
