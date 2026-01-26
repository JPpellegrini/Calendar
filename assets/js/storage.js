const STORAGE_CALENDAR = "calendar-storage";
const STORAGE_USUARIO = "usuario-storage";

function iniciarStorage() {
    const dataUsuario = {
      id: 1,
      usuario: 'estefania',
      pass: 'juampi'
    };

    const dataCalendar = [
      {
        id: 1,
        titulo: 'Calendario Adviento Personalizado',
        fecha: '2026-01-01',
        descripcion: 'Este es mi más grande regalo, no solo lo creé yo mismo pensado para vos. Sino que también incluido con esto esta todo mi Amor, aprecio y dedicación hacia vos. Acá esta mi mas grande esfuerzo para darte el mejor regalo personalizado, todo para una mujer increíble como vos.\nAca vas a poder ver regalos que vas a recibir o que recibiste (ya están planeados jeje) y podes tener tu propio calendario de adviento con regalos infinitos.\nEspero que disfrutes esta aventura infinita, te Amo con todo mi corazón, hasta el infinito y más allá, a pasitos de tortuga ida y vuelta, y en mayúsculas mi vida. Te Amoo infinitoo ❤️',
        imagen: 'calendario.jpg'
      },
      {
        id: 2,
        fecha: '2026-01-02',
        descripcion: 'otra salida',
        imagen: 'login-bg.jpg'
      }
    ];

    localStorage.setItem(STORAGE_USUARIO, JSON.stringify(dataUsuario));
    localStorage.setItem(STORAGE_CALENDAR, JSON.stringify(dataCalendar));
}

function verificarDatosUsuario(user, pass) {
  const usuario = JSON.parse(localStorage.getItem(STORAGE_USUARIO));

  if(usuario.usuario.toUpperCase().trim() == user.toUpperCase().trim() && usuario.pass.trim() == pass.trim())
    return true;
  
  return false;
}

function consultarDiasRegalo() {
  return JSON.parse(localStorage.getItem(STORAGE_CALENDAR));
}
