document.getElementById('btnRegresar').addEventListener('click', function () {
    window.location.href = 'admin.html';
  });

  document.getElementById('formDestino').addEventListener('submit', function (e) {
    e.preventDefault();
    const json = JSON.parse(localStorage.getItem('wondersData')) || [];

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const link_sitio = document.getElementById('link_sitio').value;
    const link_ubicacion = document.getElementById('link_ubicacion').value;
    
    // Procesar las rutas de imágenes
    const imagenesInput = document.getElementById('imagenes').value;
    const imagenes = imagenesInput.split(',').map(ruta => ({
      image: ruta.trim()
    }));

    const filtro = document.getElementById('filtro').value.trim();

    const destino = {
      name,
      description,
      imagenes,
      link_sitio,
      link_ubicacion,
      filtro
    };
    
    json.push(destino);
    localStorage.setItem('wondersData', JSON.stringify(json));
    document.getElementById('outputJson').textContent = JSON.stringify(destino, null, 2);
    console.log('json', json);
    e.target.reset();
  });