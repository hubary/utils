# lib/file.js  examples/file-test.js

- writeDataToJsonFile

  ```bash
  var data = {name:"hubary",age:30,sex:"man",email:"hubary@qq.com"}
  writeDataToJsonFile(data,'./test-file.json');

  # result create  ./test-file.json
  {
    "name": "hubary",
    "age": 30,
    "sex": "man",
    "email": "hubary@qq.com"
  }
  ```

- writeStringToFile

  ```bash
  var str = `module.exports={
    hello: "i am a girl",
    time: "will replace"
  }`
  writeStringToFile(str,'./test-file2.js');

  # result create  ./test-file2.js
  module.exports={
    hello: "i am a girl",
    time: "will replace"
  }
  ```

- replaceFileStringBetweenStartAndEnd

  ```bash
  replaceFileStringBetweenStartAndEnd({
    start: 'time:',
    end: `\n`,
    filePath: "./test-file2.js",
    value: `"${new Date().toISOString()}"`
  })

  # result
  ---------> before file data
  module.exports={
    hello: "i am a girl",
    time: "will replace"
  }
  ---------> after file data
  module.exports={
    hello: "i am a girl",
    time:"2021-08-25T09:34:17.652Z"
  }
  ```
