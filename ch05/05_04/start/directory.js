const fs = require("fs");

if (fs.existsSync("storage-files")) {
    console.log('file already exists')

}else{
    fs.mkdir("storage-files", err => {
        if (err) throw err
    
        console.log('directory created')
    })
}

