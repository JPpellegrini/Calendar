const hoy = new Date();
const mes = hoy.getMonth() + 1;
const anio = hoy.getFullYear();
let mesSeleccionado = mes;
let anioSeleccionado = anio;

document.addEventListener("DOMContentLoaded", () => {
    cargarCalendario(mes, anio);
});

function cargarCalendario(mes, anio) {
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Título
    const titulo = document.querySelector("#tituloMes");
    if (titulo) {
        titulo.textContent = `${nombresMeses[mesSeleccionado - 1]} ${anioSeleccionado}`;
    }

    const calendarGrid = document.querySelector(".calendar-grid");

    // Limpiar días anteriores
    calendarGrid.querySelectorAll(".calendar-day").forEach(d => d.remove());

    const primerDiaMes = new Date(anio, mes - 1, 1);
    const diasMes = new Date(anio, mes, 0).getDate();

    // Lunes = 0
    let inicioSemana = primerDiaMes.getDay();
    inicioSemana = inicioSemana === 0 ? 6 : inicioSemana - 1;

    // 🔹 Celdas vacías al inicio
    for (let i = 0; i < inicioSemana; i++) {
        const div = document.createElement("div");
        div.className = "calendar-day";
        calendarGrid.appendChild(div);
    }

    // 🔹 Días reales del mes
    for (let dia = 1; dia <= diasMes; dia++) {
        const div = document.createElement("div");
        div.className = "calendar-day";
        div.id = `dia-${dia}`;
        div.textContent = dia;
        calendarGrid.appendChild(div);
    }

    // 🔹 Celdas vacías al final (hasta completar semanas)
    const totalCeldas = inicioSemana + diasMes;
    const resto = totalCeldas % 7;

    if (resto !== 0) {
        const celdasFinales = 7 - resto;
        for (let i = 0; i < celdasFinales; i++) {
            const div = document.createElement("div");
            div.className = "calendar-day";
            calendarGrid.appendChild(div);
        }
    }

    if(hoy.getMonth() + 1 == mes && hoy.getFullYear() == anio){
        const elemento = document.getElementById(`dia-${hoy.getDate()}`);
        elemento.classList.add("bg-primary");
        elemento.classList.add("text-white");
    }
}

function cerrarSesion(){
    window.location.href = '../index.html';
}

function retroceder(){
    anioSeleccionado = mesSeleccionado == 1 ? anioSeleccionado - 1 : anioSeleccionado;
    mesSeleccionado = mesSeleccionado == 1 ? 12 : mesSeleccionado - 1;
    cargarCalendario(mesSeleccionado, anioSeleccionado);
}

function avanzar(){
    anioSeleccionado = mesSeleccionado == 12 ? anioSeleccionado + 1 : anioSeleccionado;
    mesSeleccionado = mesSeleccionado == 12 ? 1 : mesSeleccionado + 1;
    cargarCalendario(mesSeleccionado, anioSeleccionado);
}

