const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base, listar, hasta)=>{
    
    
    try{
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta ; i++){
            salida +=`${base} x ${i} = ${ base * i }\n`;
            consola += `${ base + ' x '.red + i + ' = '.red + base * i }\n`;
        }

        if(listar){
            console.log(`
            ===============
             Tabla del ${base}
            ===============
            `.rainbow);
            console.log(consola);
        }
        nombreA = `tabla-${base}.txt`;
        fs.writeFileSync('./salida/'+nombreA ,salida);
        return nombreA
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}
