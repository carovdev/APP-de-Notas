const process = require('process');
const comando = process.argv[2];
const titulo = process.argv[3];
const estado = process.argv[4]
const funcionesDeTareas = require('./funcionesDeTareas')

switch (comando) {
    case 'crear':
        funcionesDeTareas.agregar(titulo, estado);
        break;
    case 'listar':
        funcionesDeTareas.listar();

        break;
    case 'deshacer':
        funcionesDeTareas.deshacer();
        break;
    case 'filtrar':
        funcionesDeTareas.leerPorEstado(process.argv[3]);
        break;
    case undefined:
        console.log(`! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !\nATENCION - TIENES QUE PASAR UN ACCIÒN
        \n¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡ ¡`);
        break;

    default:
        console.log(`? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? \nNO ENTIENDO QUE QUIERES HACER
        \n? ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿ ¿`);
        break;
}