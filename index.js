let json = [
  {
      "name": "Muralla China",
      "description": "Una maravilla del mundo, actualmente es la murallas mas grande de todo el mundo, se encuentra en china etc.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/muralla1.jpeg"
          },
          {
              "image": "/assets/card-example/img/muralla2.jpeg"
          },
          {
              "image": "/assets/card-example/img/muralla3.jpeg"
          }
      ],
      "link_sitio": "https://www.britannica.com/topic/Great-Wall-of-China",
      "link_ubicacion": "https://maps.app.goo.gl/QuNohwKMHDL2t5VP9",
      "filtro": "/assets/filtros/muralla.png"
  },
  {
      "name": "Chichen Itza",
      "description": "Descubre la ciudadela inca escondida en los Andes peruanos.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/chichenItza.jpeg"
          },
          {
              "image": "/assets/card-example/img/chichen2.jpeg"
          },
          {
              "image": "/assets/card-example/img/chichen3.jpg"
          },
          {
              "image": "/assets/card-example/img/chichen4.jpeg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Chich%C3%A9n_Itz%C3%A1",
      "link_ubicacion": "https://maps.app.goo.gl/HPvYxWgCPDuv6P9d9",
      "filtro": "/assets/filtros/chichen4.png"
  },
  {
      "name": "Coliseo de Roma",
      "description": "Antiguo anfiteatro romano y símbolo de Roma, el Coliseo atrae millones de turistas cada año por su historia arquitectura y legado del Imperio romano.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/coliseo1.jpg"
          },
          {
              "image": "/assets/card-example/img/coliseo2.jpg"
          },
          {
              "image": "./assets/card-example/img/coliseo4.jpg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Coliseo",
      "link_ubicacion": "https://g.co/kgs/pYmJkc1",
      "filtro": "/assets/filtros/roma.png"
  },
  {
      "name": "Cristo Redentor",
      "description": "Ícono de Río de Janeiro y una de las maravillas modernas, el Cristo Redentor se alza sobre el Corcovado como símbolo de paz y atracción turística mundial.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/cristo.jpg"
          },
          {
              "image": "/assets/card-example/img/cristo2.jpg"
          },
          {
              "image": "/assets/card-example/img/cristo3.jpg"
          },
          {
              "image": "/assets/card-example/img/cristo4.jpg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Cristo_Redentor",
      "link_ubicacion": "https://g.co/kgs/HtM9tQQ",
      "filtro": "/assets/filtros/cristo_redentor.png"
  },
  {
      "name": "Machu Picchu",
      "description": "Antigua ciudad inca enclavada en los Andes, Machu Picchu es un destino místico y asombroso, rodeado de paisajes que quitan el aliento.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/machu.jpg"
          },
          {
              "image": "/assets/card-example/img/machu2.jpg"
          },
          {
              "image": "/assets/card-example/img/machu3.jpg"
          },
          {
              "image": "/assets/card-example/img/machu4.jpg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Machu_Picchu",
      "link_ubicacion": "https://g.co/kgs/EwGJYyJ",
      "filtro": "/assets/filtros/machuPichu.png"
  },
  {
      "name": "Petra",
      "description": "Ciudad tallada en piedra rosa, Petra fue capital nabatea y hoy es un tesoro arqueológico que sorprende con su belleza y misterio.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/petra1.jpg"
          },
          {
              "image": "/assets/card-example/img/petra2.JPG"
          },
          {
              "image": "/assets/card-example/img/petra3.jpg"
          },
          {
              "image": "/assets/card-example/img/petra4.jpg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Petra",
      "link_ubicacion": "https://g.co/kgs/Le4i86o",
      "filtro": "/assets/filtros/petra.png"
  },
  {
      "name": "Taj Mahal",
      "description": "Majestuoso mausoleo de mármol blanco, el Taj Mahal es un símbolo del amor eterno y una obra maestra de la arquitectura mogol.",
      "imagenes": [
          {
              "image": "/assets/card-example/img/taj.jpg"
          },
          {
              "image": "/assets/card-example/img/taj2.jpeg"
          },
          {
              "image": "/assets/card-example/img/taj3.jpg"
          },
          {
              "image": "/assets/card-example/img/taj4.jpg"
          }
      ],
      "link_sitio": "https://es.wikipedia.org/wiki/Taj_Mahal",
      "link_ubicacion": "https://g.co/kgs/m96UZxN",
      "filtro": "/assets/filtros/india.png"
  }
]

// Verificar si ya existe el JSON en localStorage

// if (!localStorage.getItem('wondersData')) {
//   // Si no existe, guardarlo
//   localStorage.setItem('wondersData', JSON.stringify(json));
//   json = initialData;
// } else {
//   // Si existe, recuperarlo
//   json = JSON.parse(localStorage.getItem('wondersData'));
// }

//UTILIZAREMOS ESTE COMO CODIGO IDENTIFICADOR DE CADA ENTIDAD-PORTAFOLIO-ETC
//name = json[i].name.replace(/\s+/g, '-').toLowerCase();

const mountAssets = (json) => {
  const assets = document.getElementById("assets_container");
  let name = ""
  for (let i = 0; i < json.length; i++) {
    name = json[i].name.replace(/\s+/g, '-').toLowerCase();
    for (let j = 0; j < json[i].imagenes.length; j++) {
      let img = document.createElement("img");
      img.setAttribute("id", `${name}-preview${j + 1};`);
      img.setAttribute("src", json[i].imagenes[j].image);
      console.log(img)
      assets.appendChild(img)
    }
  }
  console.log("jakdlsfjdl", assets)
}

const mountEntity = (json) => {
  const scene = document.getElementById("scene");
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);
    const entity = document.createElement("a-entity");
    entity.setAttribute("id", `mytarget${i}`);
    entity.setAttribute("mytarget", "");
    entity.setAttribute("mindar-image-target", `targetIndex: ${i}`);
    MountPortafolio(json[i], entity)
    setComponent2(entity, json[i].name, i + 1)
    mountInfo(entity, json[i])
    scene.appendChild(entity);
    console.log("mi entidad", entity)
  }
};


const mountInfo = (entityPadre, object) => {
  const infoButtom = document.createElement("a-image")
  let name = object.name.replace(/\s+/g, '-').toLowerCase();
  infoButtom.setAttribute('visible', false)
  infoButtom.setAttribute('id', `info-buttom-${name}`)
  infoButtom.setAttribute('class', 'clickable')
  infoButtom.setAttribute('src', '#icon-info')
  infoButtom.setAttribute('alpha-test', "0.5")
  infoButtom.setAttribute('position', '-0.75 -0.5 0')
  infoButtom.setAttribute('height', '0.15')
  infoButtom.setAttribute('width', '0.15')
  infoButtom.setAttribute('animation', 'property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate')

  const webButton = document.createElement("a-image");
  webButton.setAttribute('visible', false);
  webButton.setAttribute('id', `web-button-${name}`);
  webButton.setAttribute('class', 'clickable');
  webButton.setAttribute('src', '#icon-search');
  webButton.setAttribute('alpha-test', "0.5");
  webButton.setAttribute('position', '-0.25 -0.5 0');
  webButton.setAttribute('height', '0.15');
  webButton.setAttribute('width', '0.15');
  webButton.setAttribute('animation', 'property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate');


  const locationButton = document.createElement("a-image");
  locationButton.setAttribute('visible', false);
  locationButton.setAttribute('id', `location-button-${name}`);
  locationButton.setAttribute('class', 'clickable');
  locationButton.setAttribute('src', '#icon-location');
  locationButton.setAttribute('alpha-test', "0.5");
  locationButton.setAttribute('position', '0.25 -0.5 0');
  locationButton.setAttribute('height', '0.15');
  locationButton.setAttribute('width', '0.15');
  locationButton.setAttribute('animation', 'property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate');

  const filterButton = document.createElement("a-image");
  filterButton.setAttribute('visible', false);
  filterButton.setAttribute('id', `filter-button-${name}`);
  filterButton.setAttribute('class', 'clickable');
  filterButton.setAttribute('src', '#icon-filter');
  filterButton.setAttribute('alpha-test', "0.5");
  filterButton.setAttribute('position', '0.75 -0.5 0');
  filterButton.setAttribute('height', '0.15');
  filterButton.setAttribute('width', '0.15');
  filterButton.setAttribute('animation', 'property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate');

  const title = document.createElement("a-text")
  title.setAttribute("value", object.name)
  title.setAttribute("color", 'black')
  title.setAttribute("align", "center")
  title.setAttribute("color", "black");
  title.setAttribute("align", "center");
  title.setAttribute("width", "1.5");
  title.setAttribute("position", "0 0.6 0");
  title.setAttribute("geometry", "primitive:plane; height: 0.1; width: 2;");
  title.setAttribute("material", "opacity: 0.5");
  title.setAttribute("wrapCount", "150");


  const formattedDescription = formatedDescription(object.description, 5);

  const information = document.createElement("a-text");
  information.setAttribute('id', `information-${name}`)
  information.setAttribute("value", formattedDescription);
  information.setAttribute("visible", "false");
  information.setAttribute("class", "clickable");
  information.setAttribute("color", "black");
  information.setAttribute("align", "center");
  information.setAttribute("width", "0.9");
  information.setAttribute("position", "1.3 0 0");
  information.setAttribute("geometry", "primitive:plane; height: 1; width: 0.6;");
  information.setAttribute("material", "opacity: 0.5");
  information.setAttribute("wrapCount", "150");


  entityPadre.appendChild(infoButtom)
  entityPadre.appendChild(webButton)
  entityPadre.appendChild(locationButton)
  entityPadre.appendChild(filterButton)
  entityPadre.appendChild(title)
  entityPadre.appendChild(information)


}

function formatedDescription(text, maxWordsPerLine = 4) {
  const words = text.split(' ');
  let lines = [];

  for (let i = 0; i < words.length; i += maxWordsPerLine) {
    lines.push(words.slice(i, i + maxWordsPerLine).join(' '));
  }

  return lines.join('\n');
}

const setComponent2 = (componente, name, index) => {

  const name_str = name.replace(/\s+/g, '-').toLowerCase();
  // Crear el <a-image>
  const aImage = document.createElement('a-image');
  aImage.setAttribute('id', `paintandquest-preview-button-${index}`);
  aImage.setAttribute('class', 'clickable');
  aImage.setAttribute('src', `#${name_str}-preview${index};`); // puedes hacerlo dinámico con json[index].preview
  aImage.setAttribute('alpha-test', '0.5');
  aImage.setAttribute('position', '0 0 0');
  aImage.setAttribute('height', '0.552');
  aImage.setAttribute('width', '1');

  // Añadirlo al target
  componente.appendChild(aImage)
};


const MountPortafolio = (object, entidadPadre) => {
  //inicializamos la entidad portafolio
  const portafolio = document.createElement('a-entity');
  let name = object.name.replace(/\s+/g, '-').toLowerCase();
  portafolio.setAttribute('id', `portafolio-${name}`)
  portafolio.setAttribute('visible', false)
  portafolio.setAttribute('position', '1 0 -0.01')

  let portafolio_item
  let image
  for (let j = 0; j < object.imagenes.length; j++) {
    portafolio_item = document.createElement('a-entity')
    portafolio_item.setAttribute('id', `portafolio-item-${j}-${name}`)

    image = document.createElement('a-image')
    image.setAttribute('id', `imagen-preview-${j}-${name}`)
    image.setAttribute('class', "clickable")
    image.setAttribute('src', `#${name}-preview${j + 1};`)
    image.setAttribute('alpha-test', "0.5")
    image.setAttribute('position', '0 0 0')
    image.setAttribute('height', "0.552")
    image.setAttribute('width', "1")

    portafolio_item.appendChild(image)
    portafolio.appendChild(portafolio_item)
  }

  const button_left = document.createElement('a-image')
  button_left.setAttribute('visible', false)
  button_left.setAttribute('id', `left-buttom-${name}`)
  button_left.setAttribute('class', 'clickable')
  button_left.setAttribute('src', '#icon-left')
  button_left.setAttribute('position', "-0.7 0 0")
  button_left.setAttribute('height', "0.15")
  button_left.setAttribute('width', "0.15")
  portafolio.appendChild(button_left)

  const button_right = document.createElement('a-image')
  button_right.setAttribute('visible', false)
  button_right.setAttribute('id', `right-buttom-${name}`)
  button_right.setAttribute('class', 'clickable')
  button_right.setAttribute('src', '#icon-right')
  button_right.setAttribute('position', "0.7 0 0")
  button_right.setAttribute('height', "0.15")
  button_right.setAttribute('width', "0.15")
  portafolio.appendChild(button_right)

  entidadPadre.appendChild(portafolio)



}


const showPortfolio = (done, index) => {
  object = json[index]
  const name = object.name.replace(/\s+/g, '-').toLowerCase();
  const portfolio = document.getElementById(`portafolio-${name}`);
  const portfolioLeftButton = document.getElementById(`left-buttom-${name}`);
  const portfolioRightButton = document.getElementById(`right-buttom-${name}`);
  //const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

  let y = 0;
  let currentItem = 0;

  portfolio.setAttribute("visible", true);

  const showPortfolioItem = (item) => {
    for (let i = 0; i < object.imagenes.length; i++) {
      document.getElementById(`portafolio-item-${i}-${name}`).setAttribute("visible", i === item);
    }
  }
  const id = setInterval(() => {
    y += 0.008;
    if (y >= 0.6) {
      clearInterval(id);
      portfolioLeftButton.setAttribute("visible", true);
      portfolioRightButton.setAttribute("visible", true);
      portfolioLeftButton.addEventListener('click', () => {
        currentItem = (currentItem + 1) % object.imagenes.length;
        showPortfolioItem(currentItem);
      });
      portfolioRightButton.addEventListener('click', () => {
        currentItem = (currentItem - 1 + object.imagenes.length) % object.imagenes.length;
        showPortfolioItem(currentItem);
      });

      // paintandquestPreviewButton.addEventListener('click', () => {
      //   paintandquestPreviewButton.setAttribute("visible", false);
      //   const testVideo = document.createElement("video");
      //   const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
      //   if (canplayWebm == "") {
      //     document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
      //     document.querySelector("#paintandquest-video-mp4").play();
      //   } else {
      //     document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
      //     document.querySelector("#paintandquest-video-webm").play();
      //   }
      // });

      setTimeout(() => {
        done();
      }, 500);
    }
    portfolio.setAttribute("position", "0 0 " + y);
  }, 10);
}

const showInfo = (index) => {
  console.log("showinfo", index)
  object = json[index]
  const name = object.name.replace(/\s+/g, '-').toLowerCase();

  let y = 0;
  const infoButtom = document.getElementById(`info-buttom-${name}`);
  const webButtom = document.getElementById(`web-button-${name}`);
  const locationButtom = document.getElementById(`location-button-${name}`);
  const filterButtom = document.getElementById(`filter-button-${name}`)
  const information = document.getElementById(`information-${name}`);


  infoButtom.setAttribute("visible", true);
  setTimeout(() => {
    webButtom.setAttribute("visible", true);
  }, 200);
  setTimeout(() => {
    locationButtom.setAttribute("visible", true);
  }, 400);
  setTimeout(() => {
    filterButtom.setAttribute("visible", true)
  }, 600)


  infoButtom.addEventListener('click', function (evt) {
    information.setAttribute("visible", !information.getAttribute("visible"))
  });
  webButtom.addEventListener('click', function (evt) {
    window.open(object.link_sitio, "_blank");
  });
  locationButtom.addEventListener('click', function (evt) {
    window.open(object.link_ubicacion, "_blank");
    currentTab = 'location';
  });
  filterButtom.addEventListener('click', function (evt) {
    const filterData = { filter: object.filtro }
    localStorage.setItem('filter', JSON.stringify(filterData))
    window.open("filtro.html")
  })

}

const showAvatar = (onDone) => {
  const avatar = document.querySelector("#avatar");
  let z = -0.3;
  const id = setInterval(() => {
    z += 0.008;
    if (z >= 0.3) {
      clearInterval(id);
      onDone();
    }
    avatar.setAttribute("position", "0 -0.25 " + z);
  }, 10);
}

AFRAME.registerComponent('mytarget', {
  init: function () {
    this.el.addEventListener('targetFound', event => {
      const targetIndex = this.el.getAttribute('mindar-image-target').targetIndex;
      console.log(`Target found: ${targetIndex}`);

      showPortfolio(() => {
      setTimeout(() => {
        showInfo(targetIndex);
      }, 100);
      }, targetIndex);
    });

    this.el.addEventListener('targetLost', event => {
      const targetIndex = this.el.getAttribute('mindar-image-target').targetIndex;
      console.log(`Target lost: ${targetIndex}`);
    });
  }
})

window.onload = () => {
  // Llama a tu función una vez que todo esté cargado
  mountAssets(json)
  mountEntity(json);
};