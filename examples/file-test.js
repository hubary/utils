// node examples\file-test.js
const {
  writeDataToJsonFile,
  writeStringToFile,
  replaceFileStringBetweenStartAndEnd
} = require('../lib/file.js')


// ==开始==  writeDataToJsonFile  ========================0==
var data = {
  name: "hubary",
  age: 30,
  sex: "man",
  email: "hubary@qq.com"
}
writeDataToJsonFile(data, './test-file.json');

// ==开始==  writeStringToFile  ========================0==
var str = `module.exports={
  hello: "i am a girl",
  time: "will replace"
}`
writeStringToFile(str, './test-file2.js');

// ==开始==  replaceFileStringBetweenStartAndEnd  ========================0==

replaceFileStringBetweenStartAndEnd({
  start: 'time:',
  end: `\n`,
  filePath: "./test-file2.js",
  value: `"${new Date().toISOString()}"`
})
