const STORAGE_CALENDAR = "calendar-storage";
const STORAGE_USUARIO = "usuario-storage";

function iniciarStorage() {
  if (!localStorage.getItem(STORAGE_USUARIO)) {
    const dataUsuario = {
      id: 1,
      usuario: 'estefania',
      pass: 'juampi'
    };

    localStorage.setItem(STORAGE_USUARIO, JSON.stringify(dataUsuario));
  }

  if (!localStorage.getItem(STORAGE_CALENDAR)) {
    const dataCalendar = [
      {
        id: 1,
        fecha: '2026-01-25',
        descripcion: 'salimos',
        imagen: 'login-bg.jpg'
      },
      {
        id: 2,
        fecha: '2026-02-14',
        descripcion: 'otra salida',
        imagen: 'otra.jpg'
      }
    ];

    localStorage.setItem(STORAGE_CALENDAR, JSON.stringify(dataCalendar));
  }
}

function verDatosStorage() {
  console.log(JSON.parse(localStorage.getItem(STORAGE_CALENDAR)));
  console.log(JSON.parse(localStorage.getItem(STORAGE_USUARIO)));
}

function verificarDatosUsuario(user, pass) {
  const usuario = JSON.parse(localStorage.getItem(STORAGE_USUARIO));

  if(usuario.usuario.toUpperCase().trim() == user.toUpperCase().trim() && usuario.pass.trim() == pass.trim())
    return true;
  
  return false;
}
