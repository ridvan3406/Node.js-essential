const cp = require("child_process");

// cp.exec('open http://www.youtube.com')

// cp.exec("open -a Terminal .")

cp.exec('node readStream', (err,data, stderr) => {
    console.log(data)
})