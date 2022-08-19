// const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');


// const [ , , arg3 = '--base=5'] = process.argv;
// const [ ,base=5] = arg3.split('=');
// console.log(base);

console.clear();
crearArchivo(argv.b, argv.l, argv.h)
.then(nombre=>{
    console.log(colors.rainbow('Archivo'+ nombre + 'creado.'));
})
.catch(console.warn);

