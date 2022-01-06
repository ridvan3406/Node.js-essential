const fs = require("fs");

fs.readFile("./assets/Readme.md", "utf8", (err,text) => {
    console.log('file Contents read')
    console.log(text)
});

