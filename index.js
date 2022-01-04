
let yarg = require("yargs");
let options = {
    default:{
        modo: 'prod',
        puerto: 0,
        debug: false
    },
    alias:{
        m: 'modo',
        p: 'port',
        d: 'debug',
    }
}

const parseArgs = yarg(process.argv.slice(2)).alias(options.alias).argv;
const parseArgsDos = yarg(process.argv.slice(2)).default(options.default).argv;
parseArgsDos.otros = parseArgsDos._;
delete parseArgs._;
delete parseArgs['$0'];
delete parseArgs.m;
delete parseArgs.p;
delete parseArgs.d;
delete parseArgsDos._;
delete parseArgsDos['$0'];
console.log(parseArgsDos);

// {modo:'dev', puerto: 8080, debug: true, otros:[1,2,3]}

// process.argv.forEach((element, i) => {
//     console.log(`${i} : ${element}`);
// });

