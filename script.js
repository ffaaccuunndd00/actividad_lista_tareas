// Función para agregar una nueva tarea
    function agregarTarea() {
        const nuevaTareaInput = document.getElementById("nuevaTarea");
        const listaTareas = document.getElementById("listaTareas");
        const nuevaTareaTexto = nuevaTareaInput.value.trim();
        if (nuevaTareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = nuevaTareaTexto;
            nuevaTarea.classList.add("pendiente");
            const botonCompletada = document.createElement("button");
            botonCompletada.textContent = "Completada";
            botonCompletada.className = "completada";
            botonCompletada.onclick = function() {
                marcarCompletada(nuevaTarea);
            };
            nuevaTarea.appendChild(botonCompletada);
            listaTareas.appendChild(nuevaTarea);
            nuevaTareaInput.value = "";
        }
    }

// Función para marcar una tarea como completada
    function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
    }

    // Agregar evento de clic a las tareas para marcarlas como
completadas
document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});

// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click",
agregarTarea);

// Función para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex"; // Mostrar completadas
        } else {
            tarea.style.display = "none"; // Ocultar pendientes
        }
    });
}

// Función para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex"; // Mostrar pendientes
        } else {
            tarea.style.display = "none"; // Ocultar completadas
        }
    });
}

// Función para mostrar todas las tareas
function mostrarTodas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        tarea.style.display = "flex"; // Mostrar todas las tareas
    });
}

// Agregar evento de clic al botón "Mostrar Completadas"
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

// Agregar evento de clic al botón "Mostrar Pendientes"
document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);

// Agregar evento de clic al botón "Mostrar todas"
document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);