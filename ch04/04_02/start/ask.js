const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("how do you like Node?  ", answer => {
    console.log(`your answer: ${answer}`)
    process.exit()
})

