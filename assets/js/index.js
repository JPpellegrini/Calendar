document.addEventListener("DOMContentLoaded", () => {
  iniciarStorage();
  verDatosStorage();
});

function ingresar(){
  const usuario = document.getElementById('inputUsuario').value;
  const pass = document.getElementById('inputPass').value;
  
  if(usuario.trim() == '' || pass.trim() == '') {
    dispararError('Ingrese datos válidos');
    return;
  }
  
  if(!verificarDatosUsuario(usuario, pass))
    dispararError('Usuario no encontrado');
  else
    window.location.href = './pages/menu.html';
}

function dispararError(texto) {
  Swal.fire({
      icon: "error",
      title: texto,
      allowOutsideClick: false,
      allowEscapeKey: false
  });
}