const path = require("path")
const dirUploads = path.join(__dirname,"www", "files", "uploads")
console.log(dirUploads)


const {log} = require("util")

log(path.basename(__filename))

log("^ The name of current file")

log("bebis")



const v8 = require("v8")

log(v8.getHeapCodeStatistics())

log(log())