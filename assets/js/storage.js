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
        titulo: 'Picnic',
        fecha: '2026-01-02',
        descripcion: 'Hoy el plan es salir y disfrutar del aire libre.\nCompartir algo rico, sentarnos tranquilos y dejar que el tiempo pase sin apuro.\nUna manta, una buena charla y el simple placer de estar juntos.\nUn momento pensado para disfrutar lo simple y lo verdadero.',
        imagen: 'picnic.jpg'
      },
      {
        id: 3,
        titulo: 'Cena a la luz de las velas y música suave',
        fecha: '2026-01-03',
        descripcion: 'Esta noche está pensada para el romance.\nVelas encendidas, música suave y una cena preparada con intención.\nUn momento para mirarnos, hablar con calma y conectar de verdad.\nUna noche especial para compartir desde el corazón.',
        imagen: 'cena-velas.jpg'
      },
      {
        id: 4,
        titulo: 'Charla bajo las estrellas',
        fecha: '2026-01-04',
        descripcion: 'Cuando caiga la noche, el plan es mirar al cielo.\nHablar de la vida, de los sueños y de lo que sentimos.\nSin distracciones, sin apuro, solo una charla sincera.\nUn momento íntimo bajo las estrellas.',
        imagen: 'charla-estrellas.jpg'
      },
      {
        id: 5,
        titulo: 'Salir a tomar un helado',
        fecha: '2026-01-05',
        descripcion: 'Hoy el plan es salir sin vueltas y disfrutar algo rico.\nCaminar tranquilos, elegir los sabores que más te gusten\ny sentarnos a charlar mientras se derrite el helado.\nUn plan simple, relajado y lleno de risas.',
        imagen: 'helado.jpg'
      },
      {
        id: 6,
        titulo: 'Comida en carrito',
        fecha: '2026-01-06',
        descripcion: 'Hoy no hay formalidades ni reglas.\nElegimos un carrito, pedimos lo que tengamos ganas\ny comemos ahí, disfrutando del momento.\nUn plan espontáneo, divertido y sin complicaciones.',
        imagen: 'carrito-comida.jpg'
      },
      {
        id: 7,
        titulo: 'Día para escribirnos una carta',
        fecha: '2026-01-07',
        descripcion: 'Hoy nos tomamos el tiempo para escribir.\nPoner en palabras lo que sentimos y valoramos.\nDecir lo que a veces cuesta expresar en voz alta.\nCartas sinceras, tranquilas y llenas de amor.',
        imagen: 'carta.jpg'
      },
      {
        id: 8,
        titulo: 'Pedir comida',
        fecha: '2026-01-08',
        descripcion: 'Hoy el plan es descansar y disfrutar.\nElegimos juntos qué pedir y esperamos tranquilos.\nComemos sin cocinar, sin apuro y sin esfuerzo.\nUn día pensado para relajarse juntos.',
        imagen: 'pedir-comida.jpg'
      },
      {
        id: 9,
        titulo: 'Competencia arte con plastilina',
        fecha: '2026-01-09',
        descripcion: 'Hoy toca creatividad y risas.\nPlastilina, imaginación y una competencia divertida\ndonde todo vale, incluso las obras más absurdas.\nLo importante es pasarla bien juntos.',
        imagen: 'competencia-plastilina.jpg'
      },
      {
        id: 10,
        titulo: 'Ir al mini teatro',
        fecha: '2026-01-10',
        descripcion: 'Hoy vamos al mini teatro.\nPrepárate para disfrutar de mini actuaciones juntos en esta salida.\nUn plan distinto para divertirnos juntos.',
        imagen: 'teatro.jpg'
      },
      {
        id: 11,
        titulo: 'Tomar un submarino',
        fecha: '2026-01-11',
        descripcion: 'Hoy el plan es algo calentito y reconfortante.\nPreparar un submarino y sentarnos tranquilos.\nDisfrutando despacio, acompañados de charla y calma.\nUn momento simple pero muy lindo.',
        imagen: 'chocolate.jpg'
      },
      {
        id: 12,
        titulo: 'Dia para ver peli en casa',
        fecha: '2026-01-12',
        descripcion: 'Hoy nos quedamos en casa.\nElegimos una película, preparamos algo rico\ny nos acomodamos para disfrutarla sin interrupciones.\nUn plan ideal para relajarse y compartir.',
        imagen: 'peli-casa.jpg'
      },
      {
        id: 13,
        titulo: 'Comida restaurante',
        fecha: '2026-01-13',
        descripcion: 'Hoy salimos a comer afuera.\nElegimos un restaurante lindo y nos sentamos tranquilos.\nDisfrutamos una buena comida compartida.\nUn momento especial para cortar la rutina.',
        imagen: 'restaurante.jpg'
      },
      {
        id: 14,
        titulo: 'Dia para jugar un juego de mesa',
        fecha: '2026-01-14',
        descripcion: 'Hoy el plan es jugar y competir un poco.\nElegimos un juego de mesa y empezamos.\nRisas, bromas y algún que otro desafío.\nUn día divertido para compartir juntos.',
        imagen: 'juego-mesa.jpg'
      },
      {
        id: 15,
        titulo: 'Salir a tomar un cafe',
        fecha: '2026-01-15',
        descripcion: 'Hoy salimos a hacer una pausa.\nUn café, algo rico y una charla tranquila.\nUn momento para frenar y compartir.\nSimple, cálido y especial.',
        imagen: 'cafe.jpg'
      },
      {
        id: 16,
        titulo: 'Caminata por la ciudad de noche',
        fecha: '2026-01-16',
        descripcion: 'Hoy salimos cuando todo se calma.\nCaminamos por la ciudad iluminada.\nCharlamos sin apuro y disfrutamos la noche.\nUn momento íntimo y tranquilo.',
        imagen: 'caminata-noche.jpg'
      },
      {
        id: 17,
        titulo: 'Regalar flores',
        fecha: '2026-01-17',
        descripcion: 'Hoy es un día para un detalle especial.\nFlores elegidas con cariño, solo porque sí.\nSin motivo, sin ocasión particular.\nUn gesto simple que dice mucho.',
        imagen: 'flores.jpg'
      },
      {
        id: 18,
        titulo: 'Vamos de shopping, te llevo a comprar ropa',
        fecha: '2026-01-18',
        descripcion: 'Preparate para hoy y elegí algo cómodo.\nSalimos de shopping para comprarte la ropa\nque vos elijas, la que más te guste.\nhoy tenes la oportunidad de hacer lo que más te gusta.',
        imagen: 'comprar-ropa.jpg'
      },
      {
        id: 19,
        titulo: 'Día de spa',
        fecha: '2026-01-19',
        descripcion: 'Hoy el plan es bajar el ritmo.\nUn día pensado para relajarse y descansar.\nDisfrutar de un ambiente de calma total.\nUn momento para renovarse.',
        imagen: 'spa.jpg'
      },
      {
        id: 20,
        titulo: 'Hoy podes elegir la cita que vos quieras',
        fecha: '2026-01-20',
        descripcion: 'Hoy la decisión es toda tuya.\nElegís el plan según tus ganas del día.\nSin límites, sin condiciones.\nCualquier elección es perfecta.',
        imagen: 'pregunta.jpg'
      },
      {
        id: 21,
        titulo: 'Armar un rompecabezas',
        fecha: '2026-01-21',
        descripcion: 'Hoy toca un plan tranquilo y paciente.\nArmar un rompecabezas de a poco.\nCharlar mientras cada pieza encuentra su lugar.\nUn momento simple para compartir tiempo.',
        imagen: 'rompecabeza.jpg'
      },
      {
        id: 22,
        titulo: 'Te llevo a comprar maquillaje',
        fecha: '2026-01-22',
        descripcion: 'Preparate para hoy y elegí una linda ropa.\nSalimos al shopping para comprarte el maquillaje\nque vos elijas, el que más te guste\ny con el que te sientas hermosa.',
        imagen: 'maquillaje.jpg'
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
