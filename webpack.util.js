const {resolve, sep} = require('path');
const fs = require('fs');

exports.readDirFiles = (dirPath) => {
    let arr = fs.readdirSync(dirPath);
    arr = arr.filter(item => {
        return item.search(/^[__|.]/) !== 0;
    });
    arr = arr.map(item => {
        return resolve(dirPath, item);
    });
    if (!(arr.length === 0)) {
        return arr;
    }
};

exports.combineOptionsForWebpackByEntryPath = ({srcRoot, dir, entryPath, entryList, isProd}) => {
    let stat = fs.statSync(entryPath);
    if (stat.isFile() && entryPath.endsWith('index.js')) {
        let entryKey = `${entryPath.split(srcRoot).pop().slice(1)}`;
        let dirName = dir.match(/\w+$/) || [0];
        if(dirName != "src") {
            entryKey = dirName;
        } else {
            entryKey = "index"
        }

        entryList[entryKey] = `.${sep}${srcRoot}${entryPath.split(srcRoot).pop()}`;
        return;
    }

    if (stat.isDirectory() && entryPath.indexOf("demo") == -1) {
        let subFiles = this.readDirFiles(entryPath);
        subFiles && subFiles.length && subFiles.forEach(file => {
            this.combineOptionsForWebpackByEntryPath({
                srcRoot,
                dir: entryPath,
                entryPath: file,
                entryList,
                isProd
            });
        });
    }
};

