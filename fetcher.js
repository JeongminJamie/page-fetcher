const fs = require("fs");
const request = require("request");
const arg = process.argv.slice(2);

const makingFile = function () {
  request.get(arg[0], (error, response, body) => {
    if (error) {
      return error;
    }
    fs.writeFile(arg[1], body, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
    });
  });
};

makingFile();
