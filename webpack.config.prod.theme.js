const {resolve, sep} = require('path');
const fs = require('fs');
const exec = require('child_process').exec;

const baseSrc = "src/theme";

function readDirFiles(dirPath) {
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
function findLessFileAndBuild(entryPath) {
    let stat = fs.statSync(entryPath);
    if(stat.isFile() && entryPath.endsWith(".less")) {
        console.log("编译:", entryPath);
        let relativeEntryPath = entryPath.split("src")[1];
        let relativeOutPath = relativeEntryPath.replace(/\.less$/, '.css');
        if(relativeEntryPath.endsWith("index.less")) {
            relativeOutPath = relativeEntryPath.replace(`${sep}index.less`, ".css");
        }

        let cmdText = `lessc src/${relativeEntryPath} lib/${relativeOutPath}`;
        exec(cmdText, function(error, stdout, stderr) {
            if(!stderr) {
                console.log("编译less成功", cmdText);
            } else {
                console.log("编译less失败", cmdText, stderr);
            }
        });
        return;
    }

    if(stat.isDirectory()) {
        let subFiles = readDirFiles(entryPath) || [];
        subFiles.forEach(e=> {
            // console.log(e);
            findLessFileAndBuild(e);
        });
    }
}

findLessFileAndBuild(baseSrc);

