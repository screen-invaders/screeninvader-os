var fs = require('fs'),
    path = require('path'),
    util = require('util'),
    createDirectoryChildren = require('./generate.js');

function dirTree(filename) {
    var stats = fs.lstatSync(filename);

    var pathClean = (filename.replace("./build/filesystem/", "")).replace("./build/filesystem", "");

    var info = {
        path: pathClean.split(path.sep),
        name: path.basename(filename)
    };

    if (stats.isDirectory()) {
        info.type = "dir";
        info.dirType = (function(){
            var rand = Math.random();
            if (rand < (1/4)){
                return "locked"
            } else if (rand < (2/4)){
                return "archive"
            }
            return "normal"
        })();

        // do recursive
        var tempChildren = fs.readdirSync(filename).map(function(child) {
            if (child != ".DS_Store") {
                return dirTree(filename + '/' + child);
            }
        });

        // filter empties
        tempChildren = tempChildren.filter(function(obj){if (obj != undefined) {return true;}});

        // transform to hashmap
        info.children = {};
        tempChildren.forEach(function(child, key){
            info.children[child.name] = child;
        });

        // Generate files
        var textChildren = createDirectoryChildren(info.path);

        textChildren.forEach(function(child, key){
            info.children[child.name] = child;
        })

    } else {
        info.type = "txt";
        info.contents = fs.readFileSync(filename, {encoding: "utf8"});
    }

    return info;
}

if (module.parent == undefined) {
    fs.writeFileSync("./src/assets/data/filesystem.json", JSON.stringify(dirTree("./build/filesystem")));
}
