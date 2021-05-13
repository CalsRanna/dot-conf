const fs = require("fs");
const readline = require("readline");

function read(fpath) {
  return new Promise((resolve, reject) => {
    try {
      let interface = readline.createInterface({
        input: fs.createReadStream(fpath),
      });
      let conf = {};
      let key = "";
      let words = [];

      interface.on("line", (line) => {
        if (line.includes("#") === false && line !== "") {
          if (line.includes("[") && line.includes("]")) {
            key = line.replace("[", "").replace("]", "").trim();
            conf[key] = {};
          } else {
            words = line.split("=");
            conf[key][words[0].trim()] = words[1].trim();
          }
        }
      });
      interface.on("close", () => {
        resolve(conf);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function write(fpath, conf) {
  return new Promise((resolve, reject) => {
    let string = "";
    let modules = Object.keys(conf);
    for (let module of modules) {
      console.log(conf);
      console.log(module);
      console.log(conf[module]);
      string += `[${module}]\n`;
      for (let key of Object.keys(conf[module])) {
        string += `${key} = ${conf[module][key]}\n`;
      }
    }
    fs.writeFile(fpath, string, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

exports.read = read;
exports.write = write;
