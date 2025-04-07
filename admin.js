
document.getElementById('formDestino').addEventListener('submit', function (e) {
    json = JSON.parse(localStorage.getItem('wondersData'));
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const link_sitio = document.getElementById('link_sitio').value;
    const link_ubicacion = document.getElementById('link_ubicacion').value;
    const imagenesInput = document.getElementById('imagenes').files;
    const filtroInput = document.getElementById('filtro').files[0];

    const imagenes = Array.from(imagenesInput).map(file => ({
        image: `/assets/card-example/img/${file.name}`  // o la ruta que uses en tu proyecto
    }));

    const filtro = `/assets/filtros/${filtroInput.name}`;

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
    console.log('json', json)
    e.target.reset();
    
});
