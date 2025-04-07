document.getElementById('btnRegresar').addEventListener('click', function () {
    window.location.href = 'admin.html';
});

document.getElementById('formDestino').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener datos desde localStorage y sessionStorage
    let json = [];

    // Obtener el JSON desde sessionStorage
    json = JSON.parse(sessionStorage.getItem('lugares')) || [];
    console.log("sessionStorage", json); 


    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const link_sitio = document.getElementById('link_sitio').value;
    const link_ubicacion = document.getElementById('link_ubicacion').value;

    // Procesar rutas de imágenes
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



    // Agregar al array de sessionStorage
    json.push(destino);
    sessionStorage.setItem('lugares', JSON.stringify(json));

    // Mostrar el nuevo destino en pantalla
    document.getElementById('outputJson').textContent = JSON.stringify(destino, null, 2);


    console.log('sessionStorage json', sessionStorage.getItem('lugares'));

    e.target.reset();
});
