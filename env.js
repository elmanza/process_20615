let path = require("path");
let argv = process.argv.slice(2);
require("dotenv").config({
    path: argv.length > 0 ? path.resolve(__dirname, 'partedos.env') : path.resolve(__dirname, 'parteuno.env') 
});
let config = {
    modo: process.env.MODE, 
    puerto: process.env.PORT, 
    debug: process.env.DEBUG, 
    otros:process.env.OTHERS.split(";")
}
console.log(config);