var fs = require('fs'),
    path = require('path'),
    util = require('util');


function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: path.parse(filename.replace("./.generate/", "")),
            name: path.basename(filename)
        };

        if (info.path.dir) {
            info.path.dir = info.path.dir.split(path.sep);
        }

    if (stats.isDirectory()) {
        info.type = "dir";

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
        tempChildren.forEach(function(child){
            info.children[child.name] = child;
        });

    } else {
        info.type = "txt";
        info.contents = fs.readFileSync(filename, {encoding: "utf8"});
    }

    return info;
}

if (module.parent == undefined) {
    fs.writeFileSync("./src/assets/data/filesystem.json", JSON.stringify(dirTree("./.generate")));
}
