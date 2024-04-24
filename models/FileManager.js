var fs = require("fs");
const format = "utf8";

class FileManager {

  constructor(name) {
    const obj = {
      [name]: ['sss'],
    };
    this.name = name;
    this.reader = readerFn(name);

    this.writer = writerFn(name);

    this.writer(obj, (data) => {
      console.log(data);
    });
  }

  get() {
    return this.reader;
  }

  set(newData) {
    return this.reader.then(() => {
      newData.id = data.length;
      data.push(newData);
      this.writer(data, (data) => {
        res(newData);
      });
    })
  }

  update() {}

  delete() {}
}

function readerFn(name) {
  return new Promise((res, rej) => {
    fs.readFile(`${name}.json`, format, (err, data) => {
      if (err) rej(err);
      res(JSON.parse(data)[name]);
    });
  });
} 

function writerFn(name) {
  return (data, callback) =>  {
    fs.writeFile(`${name}.json`, JSON.stringify(data), format, function (err) {
      if (err) throw (err);
      callback('successful create data: ' + name);
    })
  }
} 




module.exports = FileManager;
