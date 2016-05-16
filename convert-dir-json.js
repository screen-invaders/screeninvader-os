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
        info.type = "file";
        info.contents = fs.readFileSync(filename, {encoding: "utf8"});
    }

    return info;
}

if (module.parent == undefined) {
    // console.log(util.inspect(dirTree(process.argv[2]), false, null));
    fs.writeFileSync(process.argv[3], JSON.stringify(dirTree(process.argv[2])));
}
