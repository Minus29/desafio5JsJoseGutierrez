const muestraTarea = document.querySelector('#tarea');
const tareasIngresadas = document.querySelector('#tareas');
const btnAgregar = document.querySelector('#button');
const totalDeLasTareas = document.querySelector('#total');
const tareasFinalizadas = document.querySelector('#tareas-realizadas')
const cbox = document.querySelector('#cbox')

const tareasAcumuladas = [];

/* funcion para renderizar las tareas */
function renderInvitados() {
    let vacio = ""

    for (let tarea of tareasAcumuladas) {
        if (tarea.realizada) {
            statusCheck = "checked";
        } else {
            statusCheck = "";
        }
        vacio += `<div><span>${tarea.id}</span> <span> ${tarea.nombre}</span> <input type="checkbox" id="cbox" onclick="tareasok(${tarea.id})" ${statusCheck} >
        <button id="button2" onclick="borrar(${tarea.id})" >Eliminar</button></div> 
        `;
    }

    muestraTarea.innerHTML = vacio;
    calculandoTotal();

    const tareasRealizadas = tareasAcumuladas.filter((elemento) => elemento.realizada == true);

    tareasFinalizadas.innerHTML = tareasRealizadas.length;


}
/* funcion para el contador */
function calculandoTotal() {
    let total = tareasAcumuladas.length;
    totalDeLasTareas.innerHTML = total;
}


/* funcion para hacer hacer click y crear el arreglo de objetos */

btnAgregar.addEventListener("click", () => {
    const tareas = tareasIngresadas.value;
    tareasAcumuladas.push({ id: Date.now(), nombre: tareas, realizada: false });
    tareas.value = "";
    renderInvitados();
});

/* Funcion para borrar */
function borrar(id) {
    const index = tareasAcumuladas.findIndex((ele) => ele.id == id);
    if (index >= 0) {
        tareasAcumuladas.splice(index, 1);
        renderInvitados();

    }

};


/* funcion para agregar las tareas  */

function tareasok(id) {
    const index = tareasAcumuladas.findIndex((ele) => ele.id == id);
    tareasAcumuladas[index].realizada = !tareasAcumuladas[index].realizada;
    renderInvitados();
}
























