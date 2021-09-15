var fs = require('fs');
/**
 *
 * @param {* 要写入文件的对象} data
 * @param {* 文件路径以及文件名} filePath
 * @returns
 */
exports.writeDataToJsonFile = function (data, filePath, callback) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    console.error('arguments[0] is not a Object!');
    return false;
  }
  var str = JSON.stringify(data, null, 2);
  fs.writeFile(filePath, str, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`success write json to ===>  ${filePath}`);
      try {
        callback && callback();
      } catch (error) {
        console.error(error);
      }
    }
  });
};

/**
 *
 * @param {* 要写入文件的字符串} str
 * @param {* 文件路径和名称} filePath
 */
exports.writeStringToFile = function (str, filePath, callback) {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    console.error('arguments[0] is not a String!');
    return false;
  }
  fs.writeFile(filePath, str, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`success write string to ===>  ${filePath}`);
      try {
        callback && callback();
      } catch (error) {
        console.log(error);
      }
    }
  });
};

/**
 *
 * @param config
 * {
 *  start   无正则时,起始字符
 *  end     无正则时,结束字符
 *  pattern 有正则时,直接使用正则进行查找字符串
 *  replaceAll  true/false
 *  filePath 文件路径
 * }
 */
exports.replaceFileStringBetweenStartAndEnd = function (config) {
  var pattern, filePath;
  if (Object.prototype.toString.call(config) === '[object Object]') {
    if ('[object RegExp]' === Object.prototype.toString.call(config.pattern)) {
      pattern = config.pattern;
    } else {
      if (!config.start || !config.end || !config.filePath) {
        console.log('argument object start|end|filePath is not found!');
        return;
      }
      filePath = config.filePath;
      var regStr = `(?<=${config.start}).*?(?=${config.end})`;
      pattern = new RegExp(regStr, config.attributes);
    }
  } else {
    console.log(
      'arguments is object config includes start|end|pattern|filePath|value!'
    );
    return;
  }
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return console.log(`${filePath} does not exist`);
    }
    fs.readFile(filePath, 'utf8', function (err, data) {
      var dataReplace;
      console.log('---------> before file data');
      console.log(data);
      if (config.replaceAll) {
        dataReplace = data.replaceAll(pattern, config.value);
      } else {
        dataReplace = data.replace(pattern, config.value);
      }
      console.log('---------> after file data');
      console.log(dataReplace);
      fs.writeFile(filePath, dataReplace, function (err) {
        if (err) {
          return console.log(err);
        } else {
          console.log(`success replace  ${filePath} with ${config.value}`);
        }
      });
    });
  });
};
