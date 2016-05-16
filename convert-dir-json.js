var requireDirectory = require('require-directory');
var fs = require('fs'),
    path = require('path')

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
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
        info.contents = fs.readFileSync(filename, {encoding: "utf8"});
    }

    return info;
}

if (module.parent == undefined) {
    // node dirTree.js ~/foo/bar
    var util = require('util');
    // console.log(util.inspect(dirTree(process.argv[2]), false, null));
    fs.writeFileSync(process.argv[3], JSON.stringify(dirTree(process.argv[2])));
}
