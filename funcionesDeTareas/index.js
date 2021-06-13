const fs = require('fs');


module.exports = {
    listado: JSON.parse(fs.readFileSync('./data/tareas.json',
        'utf-8')),
    agregar: function (titulo, estado = 'Pendiente') {
        let nuevaTarea = {
            titulo,
            estado
        }

        this.listado.push(nuevaTarea);
        this.guardar(this.listado);
        this.mensaje('LA TAREA HA SIGO AGREGADA');
    },
    guardar: function (listado) {
        fs.writeFileSync('./data/tareas.json', JSON.stringify(listado, null, 3), 'utf-8');

    },
    mensaje: texto => console.log(`- - - - - - - - - - - - - - - - - - - \n${texto}
            \n- - - - - - - - - - - - - - - - - - `),
    listar: function () {
        this.listado.forEach(tarea => {
            console.log(tarea);

        })
        this.mensaje('ESTA ES LA LISTA')
    },

    deshacer: function () {
        this.listado.pop();
        this.guardar(this.listado);
        this.mensaje('SU ULTIMA TAREA HA SIDO ELIMINADA');

    },
    leerPorEstado: function (filtro) {
        let estadosFiltrados = this.listado.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        return console.log(estadosFiltrados);
    }



}

