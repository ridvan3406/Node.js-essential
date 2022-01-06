const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt =''

readStream.on("data", data => {
  console.log(`I read ${data.length - 1} of characters of text`);
  fileTxt+= data
});

readStream.on("end", (end) => {
  console.log('finished reading file')
  console.log(fileTxt.length-1)
})