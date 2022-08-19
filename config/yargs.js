const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    default: 5,
    describe: 'Es la base de la tabla a multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe:'Muestra la tabla en consola'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default:10,
    describe: 'Define hasta donde multiplicar'
})
.check((argv, options) =>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    if(isNaN(argv.h)){
        throw 'Hasta tiene que ser número'
    }
    return true;
})
.argv;

module.exports = argv;