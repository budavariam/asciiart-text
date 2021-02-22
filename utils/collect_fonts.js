#!/usr/bin/env node

const fs = require('fs')
const fontPath = "figlet/importable-fonts"
const formatKey = (fileName) => "font_" + fileName.replace(/('|.js$)/g, '').replace(/[- ]/g, '_')
const formatAccessName = (fileName) => fileName.replace(/.js$/, '')


fs.readdir(`node_modules/${fontPath}`, (err, files) => {
    const parsedData = files.map((fileName) => {
        return {
            objectKey: formatKey(fileName),
            accessName: formatAccessName(fileName),
            fullPath: `${fontPath}/${fileName}`,
        }
    });

    const finalData = [].concat(
        parsedData.map((data) => `import ${data.objectKey} from "${data.fullPath}"`),
        [
            "",
            "export const fonts = {"
        ],
        parsedData.map((data) => `  ${data.objectKey}: { name: "${data.accessName}", value: ${data.objectKey} },`),
        [
            "}"
        ]).join("\n")

    fs.writeFile("./src/asd.js", finalData, () => { console.log("DONE") })
});

