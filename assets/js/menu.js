const hoy = new Date();
const mes = hoy.getMonth() + 1;
const anio = hoy.getFullYear();
let mesSeleccionado = mes;
let anioSeleccionado = anio;

console.log('hoy');
console.log(hoy);
console.log(mes);
console.log(anio);
console.log('hora');
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log('-------------------------------');
const fechaHoraActual = new Date().toLocaleString('es-AR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
console.log(fechaHoraActual);

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
    
    marcarDiaRegaloEnMes(mes, anio);
}

function marcarDiaRegaloEnMes(mes, anio){
    const diasRegalos = consultarDiasRegalo();
    
    diasRegalos.forEach(regalo => {
        const anioRegalo = Number(regalo.fecha.split("-")[0]);
        const mesRegalo  = Number(regalo.fecha.split("-")[1]);
        const diaRegalo  = Number(regalo.fecha.split("-")[2]);

        if(anioRegalo == anio && mesRegalo == mes){
            const elemento = document.getElementById(`dia-${diaRegalo}`);
            
            elemento.classList.add( "d-flex", "justify-content-center", "align-items-center", "position-relative" );
            elemento.innerHTML = "";

            const spanDia = document.createElement("span");
            spanDia.textContent = diaRegalo;
            spanDia.className = "position-absolute top-0 start-0 p-1";

            const boton = document.createElement("button");

            boton.className = "regalo-btn btn rounded-circle d-flex justify-content-center align-items-center position-absolute shadow-sm border-0";
            boton.style.background = "linear-gradient(135deg, #f8b4c8, #f3a1bd)";
            boton.style.boxShadow = "0 4px 10px rgba(248, 180, 200, 0.6)";
            boton.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
            boton.innerHTML = '<i class="fa-solid fa-gift text-white"></i>';
            boton.onclick = () => abrirRegalo(boton, regalo);

            if (window.innerWidth <= 576) { 
                // Mobile
                boton.style.width = "36px";
                boton.style.height = "36px";
            } else { 
                // Desktop
                boton.style.width = "46px";
                boton.style.height = "46px";
            }

            // efecto hover (solo desktop)
            boton.addEventListener("mouseenter", () => {
                boton.style.transform = "scale(1.08)";
            });
            boton.addEventListener("mouseleave", () => {
                boton.style.transform = "scale(1)";
            });

            elemento.appendChild(spanDia);
            elemento.appendChild(boton);
        }
    });
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

function abrirRegalo(boton, regalo){
    if (hoy.toISOString().split("T")[0] >= regalo.fecha){
        explotarBoton(boton, regalo);
    } else {
        dispararError('Aún no es momento de abrir este regalo, debes esperar...');
    }
}

function explotarBoton(boton, regalo){
    cargarModal(regalo);

    boton.classList.add("cargando");

    setTimeout(() => {
        boton.classList.remove("cargando");
        boton.classList.add("exploto");

        setTimeout(() => {
            abrirModal();
            boton.classList.remove("exploto");
        }, 600);
    }, 2000);
}

function cargarModal(regalo){
    document.getElementById("descripcionRegalo").innerText = regalo.descripcion;
    document.getElementById("imagenRegalo").src = `../assets/images/${regalo.imagen}`;
    document.getElementById("tituloRegalo").innerText = regalo.titulo;
}

function abrirModal(){
    const modal = new bootstrap.Modal(
        document.getElementById("modalRegalo")
    );
    modal.show();
}

function dispararError(texto) {
  Swal.fire({
      icon: "error",
      title: texto,
      allowOutsideClick: false,
      allowEscapeKey: false
  });
}